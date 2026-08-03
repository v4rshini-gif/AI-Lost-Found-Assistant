from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    description: str
    image_path: str | None = None


class ItemCreate(ItemBase):
    pass


class ItemRead(ItemBase):
    id: int

    class Config:
        orm_mode = True
