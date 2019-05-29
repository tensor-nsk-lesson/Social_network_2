from . import routes
from modules.database import db
from flask import request


#Запросы профиля
@routes.route('/get/users', methods=["GET"])
def get_all_users():
    return db.execute_sql('SELECT * FROM \"User\"')

