from app import app
from modules.database import db
from flask import request

@app.route('/post/user/new', methods=["POST"]) 
def add_user():
    data = request.get_json()
    return db.post_user_new(data)

@app.route('/post/user/auth', methods=["POST"])
def auth_user():
    data = request.get_json()
    return db.post_user_auth(data)