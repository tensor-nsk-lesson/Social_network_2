from . import routes
from modules.database import db
from flask import request


#Запросы профиля
@routes.route('/allusers', methods=["GET"])
def get_all_users():
    return db.execute_sql('SELECT * FROM \"User\"')


@routes.route('/profile/<int:id>', methods=["GET"])
def profile(id):
    return db.execute_sql('SELECT * FROM \"User\" u WHERE u.id = ' + id.__str__())  # Выборка конкретного пользователя


@routes.route('/profile/<int:id>/friends', methods=["GET"])
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
@routes.route('/profile/<int:id>/blacklist', methods=["GET"])
def get_one_friend(id):
    return db.execute_sql('SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = ' + id.__str__() + ' AND f.state_id = 3 ')


@routes.route('/profile/<int:id>/blacklist', methods=["PUT"])
def put_one_friend(id):
	data = request.json()
	return db.execute_sql('UPDATE Friendlist f SET state_id = 3 WHERE f.user_id = ' + id.__str__() + ' AND friend_id = ' + data["user_id"])


@routes.route('/profile/<int:u_id>/allmessage', methods=["GET"])
def get_all_message(u_id):
    return db.execute_sql('SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = ' + u_id.__str__())

