# backend/app.py
from flask import Flask, send_from_directory, request, jsonify
import os

app = Flask(__name__, static_folder="build", static_url_path="")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("prompt")
    bot_response = f"Parachinar chatbot responding to: {user_input}"
    return jsonify({"response": bot_response})

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True)
