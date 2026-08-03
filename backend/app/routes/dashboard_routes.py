from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.lost_item import LostItem
from app.models.found_item import FoundItem
from app.dependencies.auth_dependency import get_current_user

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/dashboard")
def dashboard(current_user: str = Depends(get_current_user), db: Session = Depends(get_db)):
    lost_count = db.query(LostItem).count()
    found_count = db.query(FoundItem).count()

    recent_activity = []
    for item in db.query(LostItem).order_by(LostItem.id.desc()).limit(3):
        recent_activity.append(f"Lost item: {item.name or item.description}")
    for item in db.query(FoundItem).order_by(FoundItem.id.desc()).limit(3):
        recent_activity.append(f"Found item: {item.description}")

    return {
        "lost_count": lost_count,
        "found_count": found_count,
        "match_count": min(lost_count, found_count),
        "recent_activity": recent_activity,
    }
