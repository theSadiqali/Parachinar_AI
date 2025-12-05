from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio
from gemini_api import generate_gemini_response
from db import init_db, save_chat, get_history

app = FastAPI(title="Parachinar AI Backend")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    prompt: str

@app.on_event("startup")
async def startup_event():
    await init_db()

@app.get("/")
async def root():
    return {"message": "Parachinar AI Backend Running"}

@app.post("/chat")
async def chat_endpoint(req: ChatRequest):
    prompt = req.prompt.strip()
    if not prompt:
        raise HTTPException(status_code=400, detail="Prompt is empty")

    # Generate a Parachinar-focused response
    response_text = await generate_gemini_response(prompt)

    # Save chat to DB asynchronously
    try:
        asyncio.create_task(save_chat(prompt, response_text))
    except Exception:
        pass

    return {"response": response_text}

@app.get("/history")
async def history(limit: int = 50):
    data = await get_history(limit)
    return {"history": data}
