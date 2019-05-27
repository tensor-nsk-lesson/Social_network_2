from . import routes
from modules.database import db
from flask import request


#Запросы профиля
@routes.route('/get/users', methods=["GET"])
def get_all_users():
    return db.execute_sql('SELECT * FROM \"User\"')


@routes.route('/get/user/<int:id>', methods=["GET"])
def profile(id):
    return db.execute_sql('SELECT * FROM \"User\" u WHERE u.id = ' + id.__str__())  # Выборка конкретного пользователя


@routes.route('/get/user/<int:id>/friends', methods=["GET"])
def get_all_friends(id):
    return db.execute_sql('SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = ' + id.__str__() + ' AND f.state_id = 2 ')


@routes.route('/profile/<int:id>/friends', methods=["POST"])
def post_all_friends(id):  
	data = request.json()
	return db.execute_sql('UPDATE Friendlist f SET state_id = 1 WHERE f.user_id = ' + id.__str__() + ' AND friend_id = ' + data["user_id"])


@routes.route('/profile/<int:id>/friends', methods=["PUT"])
def put_all_friends(id):  
	data = request.json()
	return db.execute_sql('UPDATE Friendlist f SET state_id = 2 WHERE f.user_id = ' + id.__str__() + ' AND friend_id = ' + data["user_id"])

#Вывод ЧС пользователя
@routes.route('/get/user/<int:id>/blacklist', methods=["GET"])
def get_one_friend(id):
    return db.execute_sql('SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = ' + id.__str__() + ' AND f.state_id = 3 ')


@routes.route('/profile/<int:id>/blacklist', methods=["PUT"])
def put_one_friend(id):
	data = request.json()
	return db.execute_sql('UPDATE Friendlist f SET state_id = 3 WHERE f.user_id = ' + id.__str__() + ' AND friend_id = ' + data["user_id"])


@routes.route('/profile/<int:u_id>/allmessage', methods=["GET"])
def get_all_message(u_id):
    return db.execute_sql('SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = ' + u_id.__str__())


@routes.route('/get/user/<int:d_id>/dialogs', methods=["GET"])
def message(d_id):
	return db.execute_sql('SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = %s' % id)


@routes.route('/get/user/<int:id>/posts', methods=["GET"])  # Выборка постов пользователя
def get_user_posts(id):
   return db.execute_sql('SELECT * FROM \"UPosts\" u, \"PContent\" p WHERE u.user_id = %s AND u.post_id = p.id' % id)

''' Необходимо добавить функцию в db.py
@app.route('/post/user/<int:id>/post/new', methods=["POST"])  # Создание поста пользователем
def create_user_post(id):
    data = request.get_json()
  #  cur.execute('''#INSERT INTO \"PContent\" VALUES (%s, %s)''', (data["content_id"], data["content"]))
  #  cur.execute('''INSERT INTO \"Post\" VALUES (%s, %s, %s)''',
 #               (data["content_id"], data["content_id"], data["date_time"]))
  #  cur.execute('''INSERT INTO \"UPosts\" (user_id, post_id) VALUES (%s, %s)''', (id, data["content_id"]))
 #   conn.commit()
  #  return "OK"