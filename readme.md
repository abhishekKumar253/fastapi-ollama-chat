# FastAPI Ollama Chat 🚀  

A FastAPI-based chatbot using **Ollama** for local AI-powered responses. Supports real-time chat via Swagger UI.  

## 🔥 Features  
- FastAPI + Ollama for AI responses  
- Swagger UI for easy testing (`/docs`)  
- Simple setup & streaming responses  

## 🛠 Installation  
```bash
git clone https://github.com/abhishekKumar253/fastapi-ollama-chat.git  
cd fastapi-ollama-chat  
python -m venv venv && source venv/bin/activate  
pip install -r requirements.txt  
uvicorn main:app --reload  
