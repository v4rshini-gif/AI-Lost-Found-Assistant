from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.database import Base, engine
from app.models.user import User
from app.models.lost_item import LostItem
from app.models.found_item import FoundItem
from app.routes import auth_routes, lost_routes, found_routes, match_routes, dashboard_routes

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router)
app.include_router(auth_routes.router, prefix="/auth")
app.include_router(lost_routes.router)
app.include_router(lost_routes.router, prefix="/lost")
app.include_router(found_routes.router)
app.include_router(found_routes.router, prefix="/found")
app.include_router(match_routes.router, prefix="/match")
app.include_router(dashboard_routes.router)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

@app.get("/")
def home():
    return {"message": "AI Lost & Found Backend Running"}