from . import routes
from modules.database import db

@routes.route('/groups', methods=["GET"])
def get_allgroups():
	return db.execute_sql('SELECT * FROM \"Communities\"')  # Выборка всех сообществ



@routes.route('/groups/<int:id>', methods=["GET"])
def get_group(id):
	return db.execute_sql('SELECT * FROM \"Communities\" c WHERE c.id = ' + id.__str__())  # Выборка конкретного сообщества