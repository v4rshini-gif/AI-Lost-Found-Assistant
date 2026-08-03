from fastapi import APIRouter, UploadFile, File, Form
import shutil
from app.database import SessionLocal
from app.models.lost_item import LostItem

router = APIRouter()

@router.post("/lost-item")
def report_lost(
    name: str = Form(...),
    description: str = Form(...),
    location: str = Form(...),
    image: UploadFile | None = File(None)
):
    file_path = None

    if image is not None:
        file_path = f"uploads/lost_items/{image.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

    db = SessionLocal()
    item = LostItem(
        name=name,
        description=description,
        location=location,
        image=file_path
    )
    db.add(item)
    db.commit()

    return {"message": "Lost item reported", "image_uploaded": file_path is not None}


@router.post("/report")
def report_lost_alias(
    name: str = Form(...),
    description: str = Form(...),
    location: str = Form(...),
    image: UploadFile = File(...)
):
    return report_lost(name=name, description=description, location=location, image=image)