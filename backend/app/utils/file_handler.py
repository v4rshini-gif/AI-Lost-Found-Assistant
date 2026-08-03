from pathlib import Path

UPLOAD_DIR = Path("uploads")


def ensure_upload_folders() -> None:
    UPLOAD_DIR.mkdir(exist_ok=True)
    (UPLOAD_DIR / "lost_items").mkdir(exist_ok=True)
    (UPLOAD_DIR / "found_items").mkdir(exist_ok=True)
