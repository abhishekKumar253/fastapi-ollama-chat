import ollama

def query_ollama(prompt: str):
    try:
        response = ollama.chat(model="llama3.2:1b", messages=[{"role": "user", "content": prompt}])
        return response.get("message", "No response from Ollama")
    except Exception as e:
        print(f"Error communicating with Ollama: {e}")
        return "Error with Ollama service"

