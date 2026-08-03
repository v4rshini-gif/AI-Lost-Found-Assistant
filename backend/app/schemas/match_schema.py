from pydantic import BaseModel


class MatchCreate(BaseModel):
    lost_item_id: int
    found_item_id: int


class MatchRead(BaseModel):
    id: int
    lost_item_id: int
    found_item_id: int
    score: float
    status: str

    class Config:
        orm_mode = True
