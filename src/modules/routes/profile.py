from app import app
from modules.database import db
from flask import request


#Запросы профиля
@app.route('/get/users', methods=["GET"])
def get_all_users():
    return db.get_users()


@app.route('/get/user/<int:id>', methods=["GET"])
def profile(id):
    return db.get_user(id) 


@app.route('/get/user/<int:id>/friends', methods=["GET"])
def get_all_friends(id):
    return db.get_user_friends(id)


@app.route('/user/<int:id>/friends', methods=["POST", "PUT"])
def edit_friends(id):  
  data = request.json()
  if request.method == 'POST':
    return db.post_profile_friends(data)

  if request.method == 'PUT':
    return db.put_profile_friends(data)


@app.route('/get/user/<int:id>/blacklist', methods=["GET"])  # Выборка ЧС пользователя
def get_blacklist(id):
  return db.get_user_blacklist(id)


@app.route('/get/user/<int:id>/dialogs', methods=["GET"])  # Выборка диалогов пользователя
def get_dialogs(id):
  return db.get_user_dialogs(id)


@app.route('/get/user/<int:id>/posts', methods=["GET"])  # Выборка постов пользователя
def get_posts(id):
    return db.get_user_posts(id)


@app.route('/user/<int:id>/post/new', methods=["POST"])  # Создание поста пользователем
def create_user_post(id):
    data = request.get_json()
    db.user_post_new(id,data)
    return 200