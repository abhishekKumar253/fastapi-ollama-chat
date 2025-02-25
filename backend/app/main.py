from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.chat import router as chat_router

app = FastAPI(title="FastAPI + Ollama Chatbot")

# CORS Middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

app.include_router(chat_router)

@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI + Ollama Chatbot!"}
