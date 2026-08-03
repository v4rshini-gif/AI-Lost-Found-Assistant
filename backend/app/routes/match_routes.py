from fastapi import APIRouter
from app.database import SessionLocal
from app.models.lost_item import LostItem
from app.models.found_item import FoundItem

router = APIRouter()

@router.get("/")
def match_items():
    db = SessionLocal()

    lost_items = db.query(LostItem).all()
    found_items = db.query(FoundItem).all()

    matches = []

    for lost in lost_items:
        for found in found_items:
            if lost.description.lower() in found.description.lower():
                matches.append({
                    "lost_item": lost.name,
                    "found_location": found.location
                })

    return {"matches": matches}