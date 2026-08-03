import os
from dataclasses import dataclass


@dataclass
class Settings:
    app_name: str = "ai-lost-found"
    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./lostfound.db")
    secret_key: str = os.getenv("SECRET_KEY", "change_this_secret_key")
    algorithm: str = os.getenv("ALGORITHM", "HS256")


settings = Settings()
