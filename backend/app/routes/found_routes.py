from fastapi import APIRouter, UploadFile, File, Form
import shutil
from app.database import SessionLocal
from app.models.found_item import FoundItem

router = APIRouter()

@router.post("/found-item")
def report_found(
    description: str = Form(...),
    location: str = Form(...),
    image: UploadFile | None = File(None)
):
    file_path = None

    if image is not None:
        file_path = f"uploads/found_items/{image.filename}"
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

    db = SessionLocal()
    item = FoundItem(
        description=description,
        location=location,
        image=file_path
    )
    db.add(item)
    db.commit()

    return {"message": "Found item reported", "image_uploaded": file_path is not None}


@router.post("/report")
def report_found_alias(
    description: str = Form(...),
    location: str = Form(...),
    image: UploadFile = File(...)
):
    return report_found(description=description, location=location, image=image)