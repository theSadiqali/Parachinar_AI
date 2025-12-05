"""import httpx

API_KEY = "AIzaSyCjbYb-pIzwyYZyvVw6uTzcByOdTy-h4L0"  # Replace with your Google Cloud API key
API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent"

prompt = "Hello, how are you?"

response = httpx.post(f"{API_URL}?key={API_KEY}", json={
    "contents": [
        {"parts": [{"text": prompt}]}
    ]
})

print(response.status_code)
print(response.json())



"""