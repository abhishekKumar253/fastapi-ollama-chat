from fastapi import APIRouter
from app.services.ollama_service import query_ollama

router = APIRouter(prefix="/chat", tags=["Chat"])

@router.get("/{message}")
async def chat(message: str):
    response = query_ollama(message)
    return {"response": response}
