from app import app
from modules.database import db
from flask import request

@app.route('/post/user/new', methods=["POST"]) # Выборка всех сообществ
def add_user():
    data = request.get_json()
    return db.post_user_new(data)

