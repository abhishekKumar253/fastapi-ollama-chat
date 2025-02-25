from fastapi import APIRouter
from app.services.ollama_service import query_ollama
from pydantic import BaseModel

router = APIRouter(prefix="/chat", tags=["Chat"])

class Message(BaseModel):
    message: str

@router.post("/")
async def chat(message: Message):
    response = query_ollama(message.message)
    return {"response": response}
