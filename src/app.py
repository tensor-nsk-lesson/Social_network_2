import psycopg2
from flask import Flask, jsonify, request

app = Flask(__name__)

conn = psycopg2.connect(
    "host=90.189.168.29 dbname=social_2 user=social_2 password=social_2")  # Подключение к базе данных
cur = conn.cursor()
cur.execute("SET search_path TO public")  # Установка схемы public


@app.route('/get/users', methods=["GET"])  # Выборка всех пользователей
def get_users():
    cur.execute("SELECT * FROM \"User\"")
    return response()


@app.route('/get/user/<int:id>', methods=["GET"])  # Вывод конкретного пользователя
def get_user(id):
    cur.execute("SELECT * FROM \"User\" u WHERE u.id = %s" % id)
    return response()


@app.route('/get/user/<int:id>/friends', methods=["GET"])  # Выборка друзей пользователя
def get_user_friends(id):
    cur.execute("SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = %s AND f.state_id = 2" % id)
    return response()


@app.route('/get/user/<int:id>/blacklist', methods=["GET"])  # Выборка ЧС пользователя
def get_user_blacklist(id):
    if request.method == "GET":
        cur.execute("SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = %s AND f.state_id = 3" % id)
    return response()


@app.route('/get/user/<int:id>/dialogs', methods=["GET"])  # Выборка диалогов пользователя
def get_user_dialogs(id):
    cur.execute("SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = %s" % id)
    return response()


@app.route('/get/user/<int:id>/posts', methods=["GET"])  # Выборка постов пользователя
def get_user_posts(id):
    cur.execute(
        "SELECT * FROM \"UPosts\" u, \"PContent\" p WHERE u.user_id = %s AND u.post_id = p.id" % id)
    return response()


@app.route('/post/user/<int:id>/post/new', methods=["POST"])  # Создание поста пользователем
def create_user_post(id):
    data = request.get_json()
    cur.execute('''INSERT INTO \"PContent\" VALUES (%s, %s)''', (data["content_id"], data["content"]))
    cur.execute('''INSERT INTO \"Post\" VALUES (%s, %s, %s)''',
                (data["content_id"], data["content_id"], data["date_time"]))
    cur.execute('''INSERT INTO \"UPosts\" (user_id, post_id) VALUES (%s, %s)''', (id, data["content_id"]))
    conn.commit()
    return "OK"


@app.route('/get/groups', methods=["GET"])  # Выборка всех сообществ
def get_groups():
    cur.execute("SELECT * FROM \"Communities\"")
    return response()


@app.route('/get/group/<int:id>', methods=["GET"])  # Выборка конкретного сообщества
def get_group(id):
    cur.execute("SELECT * FROM \"Communities\" c WHERE c.id = %s" % id)
    return response()


@app.route('/get/group/<int:id>/administators', methods=["GET"])  # Выборка администраторов сообщества
def get_group_admins(id):
    cur.execute(
        "SELECT * FROM \"Administrators\" a WHERE a.comm_id = %s" % id)  # Выборка конкретного сообщества
    return response()


@app.route('/post/group/new', methods=["POST"])  # Создание нового сообщества
def create_group():
    data = request.get_json()
    cur.execute('''INSERT INTO \"Communities\" (id, name, topic, "desc", photo) VALUES (%s, %s, %s, %s, %s)''',
                (data["id"], data["name"], data["topic"], data["desc"], data["photo"]))
    conn.commit()
    return "OK"


@app.route('/post/group/<int:id>/post/new', methods=["POST"])  # Создание нового поста сообществом
def create_group_post(id):
    data = request.get_json()
    cur.execute('''INSERT INTO \"PContent\" VALUES (%s, %s)''', (data["content_id"], data["content"]))
    cur.execute('''INSERT INTO \"Post\" VALUES (%s, %s, %s)''',
                (data["content_id"], data["content_id"], data["date_time"]))
    cur.execute('''INSERT INTO \"CPosts\" (comm_id, post_id) VALUES (%s, %s)''', (id, data["content_id"]))
    conn.commit()
    return "OK"


@app.route('/post/group/<int:id>/administrators/new', methods=["POST"])  # Добавление нового администратора в группу
def add_group_admin(id):
    data = request.get_json()
    # TODO: сделать проверку на существование пользователя в таблице Administrators
    cur.execute('''INSERT INTO \"Administrators\" (comm_id, user_id, role) VALUES (%s, %s, %s)''',
                (id, data["user_id"], data["roles"]))
    conn.commit()
    return "OK"


def response():
    json_response = []
    columns = [column[0] for column in cur.description]
    for row in cur.fetchall():
        json_response.append(dict(zip(columns, row)))
    return jsonify(json_response)


if __name__ == '__main__':
    app.run()
