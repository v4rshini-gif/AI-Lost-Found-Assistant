from sqlalchemy import Column, Integer, String
from app.database import Base

class LostItem(Base):
    __tablename__ = "lost_items"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    location = Column(String)
    image = Column(String)