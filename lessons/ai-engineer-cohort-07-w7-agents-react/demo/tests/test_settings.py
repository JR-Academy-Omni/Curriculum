"""环境变量：pydantic-settings 的读取顺序，以及 key 能不能传到 SDK 和客户端。"""
import pytest

from settings import Settings

NAMES = ("ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "DEMO_MODEL", "DESK_RUNTIME")


@pytest.fixture(autouse=True)
def clean_env(monkeypatch):
    for name in NAMES:
        monkeypatch.delenv(name, raising=False)


def env_file(tmp_path, text):
    path = tmp_path / ".env"
    path.write_text(text, encoding="utf-8")
    return path


def test_defaults_without_env_or_file(tmp_path):
    settings = Settings(_env_file=tmp_path / "missing.env")
    assert settings.has_credentials() is False
    assert settings.demo_model == "claude-opus-5-5"
    assert settings.desk_runtime.name == "runtime"


def test_reads_dotenv_file(tmp_path):
    settings = Settings(_env_file=env_file(tmp_path, "ANTHROPIC_API_KEY=from-file\nDEMO_MODEL=other\n"))
    assert settings.anthropic_api_key.get_secret_value() == "from-file"
    assert settings.demo_model == "other"


def test_real_environment_beats_dotenv(tmp_path, monkeypatch):
    monkeypatch.setenv("ANTHROPIC_API_KEY", "from-env")
    settings = Settings(_env_file=env_file(tmp_path, "ANTHROPIC_API_KEY=from-file\n"))
    assert settings.anthropic_api_key.get_secret_value() == "from-env"


def test_blank_key_counts_as_missing(tmp_path):
    assert Settings(_env_file=env_file(tmp_path, "ANTHROPIC_API_KEY=\n")).has_credentials() is False


def test_key_is_hidden_when_printed(tmp_path):
    settings = Settings(_env_file=env_file(tmp_path, "ANTHROPIC_API_KEY=very-secret\n"))
    assert "very-secret" not in repr(settings)


def test_unrelated_dotenv_lines_are_ignored(tmp_path):
    assert Settings(_env_file=env_file(tmp_path, "SOMETHING_ELSE=1\n")).demo_model == "claude-opus-5-5"


def test_key_reaches_client_and_sdk_env(tmp_path):
    settings = Settings(_env_file=env_file(tmp_path, "ANTHROPIC_API_KEY=k\n"))
    assert settings.client_kwargs() == {"api_key": "k"}
    assert settings.sdk_env() == {"ANTHROPIC_API_KEY": "k"}


def test_agent_options_pass_the_key_to_the_cli(monkeypatch):
    from sdk_common import options

    monkeypatch.setenv("ANTHROPIC_API_KEY", "k")
    assert options(allowed=["get_order"]).env["ANTHROPIC_API_KEY"] == "k"


def test_require_key_exits_with_a_clear_message(monkeypatch):
    import llm

    monkeypatch.setattr(llm, "Settings", lambda: Settings(_env_file=None))
    with pytest.raises(SystemExit, match="ANTHROPIC_API_KEY"):
        llm.require_key()


def test_both_entry_points_share_one_system_prompt():
    import llm
    from sdk_common import options

    prompt = Settings(_env_file=None).system_prompt()
    assert "退款客服助手" in prompt
    assert llm.SYSTEM == prompt
    assert options(allowed=["get_order"]).system_prompt == prompt
