from app import app
from modules.database import db
from flask import request
from modules.validate import json_validator as va
@app.route('/get/groups', methods=["GET"]) # Выборка всех сообществ
def get_groups():
    return db.get_groups()


@app.route('/get/group/<int:id>', methods=["GET"]) # Выборка конкретного сообщества
def get_group(id):
	return db.get_group(id)


@app.route('/get/group/<int:id>/administators', methods=["GET"])
def get_admins(id):
	return db.get_groups_admins(id)


@app.route('/post/group/new', methods=["POST"]) # Создание нового сообщества
def create_group():
	data = request.get_json()
	va.valid(data, 'sch_new_group')
	db.post_create_group_new(data)
	return 200


@app.route('/post/group/<int:id>/post/new', methods=["POST"])  # Создание нового поста сообществом
def create_group_post(id):
	data = request.get_json()
	db.post_group_post_new(id, data)
	return 200

@app.route('/post/group/<int:id>/administrators/new', methods=["POST"])  # Добавление нового администратора в группу
def add_group_admin(id):
	data = request.get_json()
	return db.post_group_admins(id, data)

