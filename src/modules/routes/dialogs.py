from . import routes
from modules.database import db

@routes.route('/dialogs/<int:d_id>', methods=["GET"])
def message(d_id):
	return db.execute_sql('''SELECT m.date_time, concat(u.first_name, ' ', u.second_name) AS "from", mc.content FROM \"Message\" m
		INNER JOIN \"MContent\" mc ON m.content_id = mc.id AND m.dialog_id = ''' + d_id.__str__() +
		'INNER JOIN \"User\" u ON u.id = m.user_id')


