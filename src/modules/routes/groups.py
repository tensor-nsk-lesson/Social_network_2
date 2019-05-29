from . import routes
from modules.database import db
from flask import request

@routes.route('/get/groups', methods=["GET"])
def get_allgroups():
	return db.execute_sql('SELECT * FROM \"Communities\"', True)  # Выборка всех сообществ



@routes.route('/get/group/<int:id>', methods=["GET"])
def get_group(id):
	return db.execute_sql('SELECT * FROM \"Communities\" c WHERE c.id = %s' % id , True) # Выборка конкретного сообщества


@routes.route('/get/group/<int:id>/administators', methods=["GET"])
def get_group_admins(id):
	return db.execute_sql('SELECT * FROM \"Administrators\" a WHERE a.comm_id = %s' % id , True)  # Выборка всех сообществ


@routes.route('/post/group/new', methods=["GET"])
def create_group():
	return db.execute_sql('SELECT * FROM \"Administrators\" a WHERE a.comm_id = %s' % id , True)  # Выборка всех сообществ


@routes.route('/post/group/new', methods=["POST"])  # Создание нового сообщества
def post_create_group():
    data = request.get_json()
    if(db.execute_sql('''INSERT INTO \"Communities\" (id, name, topic, "desc", photo) VALUES (%s, %s, %s, %s, %s)''',
                (data["id"], data["name"], data["topic"], data["desc"], data["photo"]), True)):
    	return 200
    else:
    	return 501
    

@routes.route('/post/group/<int:id>/post/new', methods=["POST"])  # Создание нового поста сообществом
def create_group_post(id):
    data = request.get_json()
    if(db.execute_sql('''INSERT INTO \"PContent\" VALUES (%s, %s)''', (data["content_id"], data["content"]), True) and
    db.execute_sql('''INSERT INTO \"Post\" VALUES (%s, %s, %s)''',(data["content_id"], data["content_id"], data["date_time"]), True) and
    db.execute_sql('''INSERT INTO \"CPosts\" (comm_id, post_id) VALUES (%s, %s)''', (id, data["content_id"]), True)):
    	return 200
    else:
    	return 501		


@routes.route('/post/group/<int:id>/administrators/new', methods=["POST"])  # Добавление нового администратора в группу
def add_group_admin(id):
	data = request.get_json()
    # TODO: сделать проверку на существование пользователя в таблице Administrators
	if(db.execute_sql('INSERT INTO \"Administrators\" (comm_id, user_id, role) VALUES (%s, %s, %s)',(id, data["user_id"], data["roles"]), True)):
		return 200
	else:
		return 501
