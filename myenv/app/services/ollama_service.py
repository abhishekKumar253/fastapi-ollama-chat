import ollama

def query_ollama(prompt: str):
    response = ollama.chat(model="llama3.2:1b", messages=[{"role": "user", "content": prompt}])
    return response.get("message", "No response from Ollama")
