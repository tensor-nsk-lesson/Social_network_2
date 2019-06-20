from . import db
 
def get_groups():
    sql = 'SELECT * FROM \"Communities\"'
    return db.select(sql, True)


def get_group(id):
    sql = 'SELECT * FROM \"Communities\" c WHERE c.id = %d' % id
    return db.select(sql, False)


def get_groups_admins(id):
    sql = 'SELECT * FROM \"Administrators\" a WHERE a.comm_id = %d' % id
    return db.select(sql, True)


def post_create_group_new(data):
    sql = '''INSERT INTO \"Communities\" (name, topic_id, "desc", photo) VALUES ('%s', '%d', '%s', '%s')''' % (data["name"], data["topic"], data["desc"], data["photo"])
    return db.insert(sql, True)


def	post_group_post_new(data):
    sql = '''INSERT INTO \"Post\" (id, content)  VALUES ('%d', '%s'); INSERT INTO \"CPosts\" (comm_id, post_id) VALUES ('%d', '%d');''' % (data["content_id"], data["content"], data["group_id"], data["content_id"])
    return db.insert(sql, False)


def post_group_admins(id,data):
    sql = 'INSERT INTO \"Administrators\" (comm_id, user_id, role_id) VALUES (%s, %s, %s)' % (id, data["user_id"], data["roles"])
    return db.insert(sql, False)