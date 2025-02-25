from fastapi import APIRouter
from app.services.ollama_service import query_ollama
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
import asyncio

router = APIRouter(prefix="/chat", tags=["Chat"])

class Message(BaseModel):
    message: str

async def stream_ai_response(message: str):
    for chunk in query_ollama(message):
        yield chunk
        await asyncio.sleep(0.1)

@router.post("/")
async def chat(message: Message):
    response = query_ollama(message.message)
    return {"response": response}
