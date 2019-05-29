from . import routes
from modules.database import db

@routes.route('/get/user/<int:d_id>/dialogs', methods=["GET"])
def get_user_dialogs(id):
	return db.execute_sql('SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = %s' % id , True)


