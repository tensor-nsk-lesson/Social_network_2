from . import routes
from modules.database import db


#Запросы профиля
@routes.route('/allusers', methods=["GET"])
def get_allusers():
    return db.execute_sql('SELECT * FROM \"User\"')


@routes.route('/profile/<int:id>', methods=["GET"])
def profile(id):
    return db.execute_sql('SELECT * FROM \"User\" u WHERE u.id = ' + id.__str__())  # Выборка конкретного пользователя


@routes.route('/profile/<int:id>/friends', methods=["GET"])
def all_friends(id):
    return db.execute_sql('SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = ' + id.__str__() + ' AND f.state_id = 2 ')

#Вывод ЧС пользователя
@routes.route('/profile/<int:id>/blacklist', methods=["GET"])
def one_friend(id):
    return db.execute_sql('SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = ' + id.__str__() + ' AND f.state_id = 3 ')

# Вывод всех диалогов пользователя
@routes.route('/profile/<int:u_id>/dialogs', methods=["GET"])
def all_message(u_id):
    return db.execute_sql('SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = ' + u_id.__str__())
