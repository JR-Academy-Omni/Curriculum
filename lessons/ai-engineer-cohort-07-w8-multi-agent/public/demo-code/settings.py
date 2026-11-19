"""环境变量的唯一入口（和 W7 一样用 pydantic-settings）。

读取顺序：真实环境变量优先，其次是本文件夹的 .env，最后是默认值。
"""
from pathlib import Path

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict

HERE = Path(__file__).parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=HERE / ".env", env_file_encoding="utf-8",
                                      env_ignore_empty=True, extra="ignore")

    anthropic_api_key: SecretStr | None = None
    anthropic_auth_token: SecretStr | None = None

    # 协调者用中档模型，难的地方咨询更强的 advisor（escalation/advisor 模式）
    lead_model: str = "claude-sonnet-5-5"
    advisor_model: str = "claude-opus-5-5"
    drafter_model: str = "claude-sonnet-5-5"
    checker_model: str = "claude-haiku-5-5"   # 只读、查政策，用便宜的模型

    # 每个 session 的硬上限，单位美分（"300" = 3 美元）
    budget_cents: str = "300"
    runtime_dir: Path = HERE / "runtime"

    def client_kwargs(self) -> dict[str, str]:
        kwargs = {}
        if self.anthropic_api_key:
            kwargs["api_key"] = self.anthropic_api_key.get_secret_value()
        if self.anthropic_auth_token:
            kwargs["auth_token"] = self.anthropic_auth_token.get_secret_value()
        return kwargs

