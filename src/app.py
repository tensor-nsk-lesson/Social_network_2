import psycopg2
from flask import Flask, jsonify, request

app = Flask(__name__)

#Подключение к базе данных
conn = psycopg2.connect("host=90.189.168.29 dbname = social_2 user = social_2 password = social_2")
cur = conn.cursor()

#Установка схемы public
cur.execute("SET search_path TO public")


@app.route('/allusers', methods=["GET"])
def get_allusers():
    cur.execute("SELECT * FROM \"User\"")  # Выборка всех пользователей
    return response()


@app.route('/profile/<int:id>', methods=["GET"])
def profile(id):
    cur.execute("SELECT * FROM \"User\" u WHERE u.id = " + id.__str__())  # Выборка конкретного пользователя
    return response()


@app.route('/profile/<int:id>/friends', methods=["GET"])
def all_friends(id):
    cur.execute("SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = " + id.__str__() + " AND f.state_id = 2")
    return response()


#Вывод ЧС пользователя
@app.route('/profile/<int:id>/blacklist', methods=["GET", "POST"])
def one_friend(id):
    if request.method == "GET":
        cur.execute("SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = " + id.__str__() + " AND f.state_id = 3")
    return response()


# Вывод всех диалогов пользователя
@app.route('/profile/<int:u_id>/dialogs', methods=["GET"])
def all_message(u_id):
    cur.execute("SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = " + u_id.__str__())
    return response()


@app.route('/groups', methods=["GET"])
def get_allgroups():
    cur.execute("SELECT * FROM \"Communities\"")  # Выборка всех сообществ
    return response()


@app.route('/groups/<int:id>', methods=["GET"])
def get_group(id):
    cur.execute("SELECT * FROM \"Communities\" c WHERE c.id = " + id.__str__())  # Выборка конкретного сообщества
    return response()


#Вывод выбранного диалога
@app.route('/dialogs/<int:d_id>', methods=["GET", "POST"])
def message(d_id):
    cur.execute("SET search_path TO public")
    if request.method == "GET":
        cur.execute("""SELECT m.date_time, concat(u.first_name, ' ', u.second_name) AS "from", mc.content 
                        FROM \"Message\" m
                        INNER JOIN \"MContent\" mc ON m.content_id = mc.id AND m.dialog_id = """ + d_id.__str__() +
                    "INNER JOIN \"User\" u ON u.id = m.user_id")
    return response()


def response():
    json_response = []
    columns = [column[0] for column in cur.description]
    for row in cur.fetchall():
        json_response.append(dict(zip(columns, row)))
    return jsonify(json_response)


if __name__ == '__main__':
    app.run()
