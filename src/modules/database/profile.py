from . import db
 

def get_users():
	sql = 'SELECT * FROM User'
	return db.execute_sql(sql, True)


def get_user(id):
    sql = 'SELECT * FROM \"User\" u WHERE u.id = ' + id.__str__()
    return db.execute_sql(sql, False)


def get_user_friends(id):
    sql = 'SELECT friend_id FROM \"Friendlist\" u WHERE u.user_id = ' + id.__str__() + ' AND u.state_id = 2'
    return db.execute_sql(sql, True)


def post_profile_friends(data):
    sql = 'UPDATE Friendlist f SET state_id = 1 WHERE f.user_id = ' + id.__str__() + ' AND friend_id = ' + data["user_id"]
    return db.execute_sql(sql, False)


def put_profile_friends(data):
    sql = 'UPDATE Friendlist f SET state_id = 2 WHERE f.user_id = ' + id.__str__() + ' AND friend_id = ' + data["user_id"]
    return db.execute_sql(sql, False)


def get_user_blacklist(id):
    sql = 'SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = ' + id.__str__() + ' AND f.state_id = 3'
    return db.execute_sql(sql, False)


def get_user_dialogs(id):
    sql = 'SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = ' + id.__str__()
    return db.execute_sql(sql, False)


def get_user_posts(id):
    sql = 'SELECT * FROM \"UPosts\" u, \"PContent\" p WHERE u.user_id = ' + id.__str__() + ' AND u.post_id = p.id'
    return db.execute_sql(sql, False)

    
def user_post_new(id, data):
    sql = '''INSERT INTO \"PContent\" VALUES (%s, %s)''', (data['content_id'], data['content']) + '''; INSERT INTO \"Post\" VALUES (%s, %s, %s) ''', (data["content_id"], data["content_id"], data["date_time"]) + ''';INSERT INTO \"UPosts\" (user_id, post_id) VALUES (%s, %s) ''', (id, data["content_id"]) + ''';'''
    return db.execute_sql(sql, False)