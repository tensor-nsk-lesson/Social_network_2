from . import db
 
def get_groups():
    sql = 'SELECT * FROM \"Communities\"'
    return db.execute_sql(sql, True)


def get_group(id):
    sql = 'SELECT * FROM \"Communities\" c WHERE c.id = %s' % id
    return db.execute_sql(sql, False)


def get_groups_admins(id):
    sql = 'SELECT * FROM \"Administrators\" a WHERE a.comm_id = %s' % id
    return db.execute_sql(sql, True)


def post_create_group_new(data):
    sql = 'INSERT INTO \"Communities\" (id, name, topic, "desc", photo) VALUES (%s, %s, %s, %s, %s)', (data["id"], data["name"], data["topic"], data["desc"], data["photo"])
    return db.execute_sql(sql, False)


def	post_group_post_new(id, data):
    sql = 'INSERT INTO \"PContent\" VALUES (%s, %s)', (data["content_id"], data["content"])+'; INSERT INTO \"Post\" VALUES (%s, %s, %s)',(data["content_id"], data["content_id"], data["date_time"]) +';INSERT INTO \"CPosts\" (comm_id, post_id) VALUES (%s, %s)', (id, data["content_id"])
    return db.execute_sql(sql, False)


def post_group_admins(id,data):
    sql = 'INSERT INTO \"Administrators\" (comm_id, user_id, role) VALUES (%s, %s, %s)', (id, data["user_id"], data["roles"])
    return db.execute_sql(sql, False)