import aiosqlite

DB_PATH = "chat_history.db"

async def init_db():
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute("""
            CREATE TABLE IF NOT EXISTS history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                prompt TEXT NOT NULL,
                response TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        await db.commit()

async def save_chat(prompt: str, response: str):
    async with aiosqlite.connect(DB_PATH) as db:
        await db.execute("INSERT INTO history (prompt, response) VALUES (?, ?)", (prompt, response))
        await db.commit()

async def get_history(limit: int = 100):
    async with aiosqlite.connect(DB_PATH) as db:
        cursor = await db.execute("SELECT id, prompt, response, created_at FROM history ORDER BY id DESC LIMIT ?", (limit,))
        rows = await cursor.fetchall()
        return [dict(id=r[0], prompt=r[1], response=r[2], created_at=r[3]) for r in rows]
