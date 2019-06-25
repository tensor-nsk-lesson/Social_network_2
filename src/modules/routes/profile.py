from app import app
from modules.database import db
from flask import request


#Запросы профиля
@app.route('/get/users', methods=["GET"])
def get_all_users():
    if r.get(request.cookies.get('session')):
        return db.get_users()
    return "Время сессии истекло"


@app.route('/get/user/<int:id>', methods=["GET"])
def profile(id):
    if r.get(request.cookies.get('session')):
        return db.get_user(id) 
    return "Время сессии истекло"


@app.route('/get/user/<int:id>/friends', methods=["GET"])
def get_all_friends(id):
    if r.get(request.cookies.get('session')):
        return db.get_user_friends(id)
    return "Время сессии истекло"


@app.route('/user/friends', methods=["POST", "PUT"])
def edit_friends():  
  data = request.get_json()
  if request.method == 'POST':
    if r.get(request.cookies.get('session')):
        return db.post_profile_friends(data)
    else:
        return "Время сессии истекло"
  if request.method == 'PUT':
    if r.get(request.cookies.get('session')):
        return db.put_profile_friends(data)
    else:
        return "Время сессии истекло"


@app.route('/get/user/<int:id>/blacklist', methods=["GET"])  # Выборка ЧС пользователя
def get_blacklist(id):
    if r.get(request.cookies.get('session')):
        return db.get_user_blacklist(id)
    return "Время сессии истекло"


@app.route('/get/user/<int:id>/dialogs', methods=["GET"])  # Выборка диалогов пользователя
def get_dialogs(id):
    if r.get(request.cookies.get('session')):
        return db.get_user_dialogs(id)
    return "Время сессии истекло"


@app.route('/get/user/<int:id>/posts', methods=["GET"])  # Выборка постов пользователя
def get_posts(id):
    if r.get(request.cookies.get('session')):
        return db.get_user_posts(id)
    return "Время сессии истекло"


@app.route('/user/<int:id>/post/new', methods=["POST"])  # Создание поста пользователем
def create_user_post(id):
    data = request.get_json()
    if r.get(request.cookies.get('session')):
        db.user_post_new(id,data)
        return 200
    return "Время сессии истекло"
    
