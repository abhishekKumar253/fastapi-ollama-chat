from fastapi import FastAPI
from app.routes.chat import router as chat_router

app = FastAPI(title="FastAPI + Ollama Chatbot")

app.include_router(chat_router)

@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI + Ollama Chatbot!"}