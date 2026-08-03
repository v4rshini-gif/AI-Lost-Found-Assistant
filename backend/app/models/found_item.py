from sqlalchemy import Column, Integer, String
from app.database import Base

class FoundItem(Base):
    __tablename__ = "found_items"

    id = Column(Integer, primary_key=True)
    description = Column(String)
    location = Column(String)
    image = Column(String)