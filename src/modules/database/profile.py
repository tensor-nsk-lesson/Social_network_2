from . import db
import json

def get_users():
	sql = 'SELECT * FROM \"User\"'
	return db.select(sql, True)


def get_user(id):
    sql = 'SELECT * FROM \"User\" u WHERE u.id = ' + id.__str__()
    return db.select(sql, False)


def get_user_friends(id):
    sql = 'SELECT friend_id FROM \"Friendlist\" u WHERE u.user_id = ' + id.__str__() + ' AND u.state_id = 2'
    return db.select(sql, True)

#
def post_profile_friends(data):
    sql = '''SELECT * FROM \"Friendlist\" WHERE user_id = '%s' AND friend_id = '%s' OR user_id = '%s' AND friend_id = '%s' ''' % (data["user_id"], data["friend_id"], data["friend_id"], data["user_id"] )
    db_data = json.loads(db.select(sql, False))
    if db_data:
        print('ssss') 
        sql = '''UPDATE \"Friendlist\" f SET state_id = 1 WHERE f.user_id = '%d' AND f.friend_id = '%d' ''' % (db_data['user_id'], db_data['friend_id'])
    else:
        print('dddd') 
        sql = '''INSERT INTO \"Friendlist\" (user_id, friend_id, state_id)  VALUES ('%d', '%d', '%d')''' % (data['user_id'], data['friend_id'], 1)
    return db.insert(sql, False)
#

def put_profile_friends(data):
    sql = 'UPDATE Friendlist f SET state_id = 2 WHERE f.user_id = ' + data["user_id"] + ' AND friend_id = ' + data["friend_id"]
    return db.insert(sql, False)


def get_user_blacklist(id):
    sql = 'SELECT friend_id FROM  \"Friendlist\" f WHERE f.user_id = ' + id.__str__() + ' AND f.state_id = 3'
    return db.select(sql, False)


def get_user_dialogs(id):
    sql = 'SELECT dialog_id FROM \"AllDialogs\" d WHERE d.user_id = ' + id.__str__()
    return db.select(sql, False)


def get_user_posts(id):
    sql = 'SELECT * FROM \"UPosts\" u, \"PContent\" p WHERE u.user_id = ' + id.__str__() + ' AND u.post_id = p.id'
    return db.select(sql, False)

    
#def user_post_new(id, data):
#    sql = '''INSERT INTO \"PContent\" VALUES (%s, %s); INSERT INTO \"Post\" VALUES (%s, %s, %s);''' % (data['content_id'], data['content'], (data['content_id'], data['content_id'], data['date_time'], id, data['content_id'])
#    return db.execute_sql(sql, False)