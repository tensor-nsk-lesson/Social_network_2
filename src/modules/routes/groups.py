    from app import app
from modules.database import db
from flask import request

from modules.validate import json_schema as ch
from modules.validate import json_validator as va


@app.route('/get/groups', methods=["GET"]) # Выборка всех сообществ
def get_groups():
    if r.get(request.cookies.get('session')):
        return db.get_groups()
    return "Время сессии истекло"


@app.route('/get/group/<int:id>', methods=["GET"]) # Выборка конкретного сообщества
def get_group(id):
    if r.get(request.cookies.get('session')):
        return db.get_group(id)
    return "Время сессии истекло"


@app.route('/get/group/<int:id>/administators', methods=["GET"])
def get_admins(id):
    if r.get(request.cookies.get('session')):
        return db.get_groups_admins(id)
    return "Время сессии истекло"

@app.route('/post/group/new', methods=["POST"]) # Создание нового сообщества
def create_group():
	data = request.get_json()
	if va.valid(data, ch.sch_new_group):
		if r.get(request.cookies.get('session'))Ж
            return db.post_create_group_new(data)
        else:
            return "Время сессии истекло"


@app.route('/post/group/post/new', methods=["POST"])  # Создание нового поста сообществом
def create_group_post():
	data = request.get_json()
	if va.valid(data, ch.sch_new_group_post):
        if r.get(request.cookies.get('session')):
            return db.post_group_post_new(data)
        else:
            return "Время сессии истекло"
	else: 
		return 500

@app.route('/post/group/<int:id>/administrators/new', methods=["POST"])  # Добавление нового администратора в группу
def add_group_admin(id):
	data = request.get_json()
    if r.get(request.cookies.get('session')):
        return db.post_group_admins(id, data)
    return "Время сессии истекло"
