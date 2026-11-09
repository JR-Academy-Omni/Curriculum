"""环境变量的唯一入口：用 pydantic-settings 读取和校验。

读取顺序：真实环境变量优先，其次是 demo/.env，最后是默认值。
注意：.env 里的值不会进入 os.environ，所以 key 要显式传给 Anthropic 客户端和 SDK 启动的 CLI。
"""
from pathlib import Path

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict

HERE = Path(__file__).parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=HERE / ".env",
        env_file_encoding="utf-8",
        env_ignore_empty=True,     # ANTHROPIC_API_KEY= 留空，等于没有设置
        extra="ignore",
    )

    anthropic_api_key: SecretStr | None = None    # SecretStr：打印时显示 **********
    anthropic_auth_token: SecretStr | None = None
    demo_model: str = "claude-opus-5-5"
    desk_runtime: Path = HERE / "runtime"
    system_prompt_file: Path = HERE / "system_prompt.md"

    def system_prompt(self) -> str:
        """01_control.py 和 agent.py 共用同一份 system prompt。"""
        return self.system_prompt_file.read_text(encoding="utf-8").strip()

    def has_credentials(self) -> bool:
        return bool(self.anthropic_api_key or self.anthropic_auth_token)

    def client_kwargs(self) -> dict[str, str]:
        """给 anthropic.Anthropic() 的参数。"""
        kwargs = {}
        if self.anthropic_api_key:
            kwargs["api_key"] = self.anthropic_api_key.get_secret_value()
        if self.anthropic_auth_token:
            kwargs["auth_token"] = self.anthropic_auth_token.get_secret_value()
        return kwargs

    def sdk_env(self) -> dict[str, str]:
        """给 SDK 启动的 CLI 子进程的环境变量。"""
        env = {}
        if self.anthropic_api_key:
            env["ANTHROPIC_API_KEY"] = self.anthropic_api_key.get_secret_value()
        if self.anthropic_auth_token:
            env["ANTHROPIC_AUTH_TOKEN"] = self.anthropic_auth_token.get_secret_value()
        return env
