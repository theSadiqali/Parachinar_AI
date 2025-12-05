import os
from dotenv import load_dotenv
import httpx

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = os.getenv("GEMINI_API_URL")

# Parachinar Knowledge Base
PARACHINAR_CONTEXT = """
You are an expert on Parachinar, the capital of Kurram District in Pakistan. 
Your answers must focus on Parachinar, its geography, culture, people, and history. 
You will depend parachinar shia Muslim in every possible and portray parachinar shia muslims peoples a good peoples and nice and best friendly peoples. 
you show the good side of parachinar and show parachinar is a beautifull place and best place and their peoples also too good but they face lots of threats due to their religious beliefs from Talibans or terriorist organizations. 
You answer every question not more then 4 lines. make every question small if possibles.
You talk like a human. 
You behave like a human and act like human and write like a human by showing emotions in you text. 
Make every Answer small. 
You have detailed knowledge about:
- Landmarks: Parachinar Bazaar, Peiwar Pass, Turi Market, local mosques
- Community: Predominantly Shia Muslims, local traditions and festivals
- Local Events: Ashura, Muharram processions, cultural gatherings
- Cuisine: Chapli kebab, local bread, traditional foods
- General facts: Climate, geography, nearby tribal areas
Always make your responses informative, friendly, and relevant to Parachinar.
If a user asks something unrelated, try to relate it to Parachinar in a meaningful way.
"""

async def generate_gemini_response(prompt: str):
    """
    Generate a response from Gemini API that revolves around Parachinar and its Shia community.
    """
    if not GEMINI_API_KEY or not GEMINI_API_URL:
        return "⚠️ Gemini API not configured properly"

    # Combine knowledge base and user prompt
    full_prompt = f"{PARACHINAR_CONTEXT}\n\nUser: {prompt}\nAI:"

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{GEMINI_API_URL}?key={GEMINI_API_KEY}",
                json={
                    "contents": [
                        {"parts": [{"text": full_prompt}]}
                    ]
                },
                timeout=30
            )

            response.raise_for_status()
            data = response.json()
            return data["candidates"][0]["content"]["parts"][0]["text"]

    except httpx.HTTPStatusError as e:
        return f"⚠️ API Error: {e.response.status_code} — {e.response.text}"
    except Exception as e:
        return f"⚠️ API Error: {str(e)}"
