from . import routes
from modules.database import db

@routes.route('/get/groups', methods=["GET"])
def get_allgroups():
	return db.execute_sql('SELECT * FROM \"Communities\"')  # Выборка всех сообществ



@routes.route('/get/group/<int:id>', methods=["GET"])
def get_group(id):
	return db.execute_sql('SELECT * FROM \"Communities\" c WHERE c.id = %s' % id) # Выборка конкретного сообщества


@routes.route('/get/group/<int:id>/administators', methods=["GET"])
def get_group_admins(id):
	return db.execute_sql('SELECT * FROM \"Administrators\" a WHERE a.comm_id = %s' % id)  # Выборка всех сообществ


@routes.route('/post/group/new', methods=["GET"])
def create_group():
	return db.execute_sql('SELECT * FROM \"Administrators\" a WHERE a.comm_id = %s' % id)  # Выборка всех сообществ
