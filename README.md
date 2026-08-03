# AI Lost and Found

A full-stack starter for an AI-powered lost and found platform with:
- FastAPI backend
- React + Vite + Tailwind frontend
- AI engine separation for text/image matching

## Quick start

1. Create and activate a virtual environment
2. Install backend dependencies:
   pip install -r requirements.txt
3. Start the API:
   uvicorn backend.app.main:app --reload
4. Start the frontend:
   cd frontend && npm install && npm run dev

## Structure

```text
ai-lost-found/
├── backend/
├── frontend/
├── ai_engine/
├── uploads/
├── .env
└── requirements.txt
```
