from sqlalchemy import Column, Integer, String, Float

from backend.app.database import Base


class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True, index=True)
    lost_item_id = Column(Integer)
    found_item_id = Column(Integer)
    score = Column(Float, default=0.0)
    status = Column(String, default="pending")
