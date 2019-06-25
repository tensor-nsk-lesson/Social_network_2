import redis
import hmac, hashlib
import random

r = redis.StrictRedis(host='localhost', port=6379, db=0)

from . import db

def hash_pass(password):
    #return hashlib.sha512(password.encode('utf-8')).hexdigest()
    return password


def post_user_new(data):
    sql = "SELECT id FROM \"User\" WHERE email = '%s' OR phone = '%s'" % (data['email'], data['phone']) 
    db_data = db.execute_sql(sql, True)
    if db_data: 
        return 'Пользователь уже существует'
    else:
        password = hash_pass(data['password'])
        sql = '''INSERT INTO \"User\" (email, password, phone, first_name, second_name, middle_name, gender_id, birthday, country_id, city_id, photo, verification, private) 
            VALUES ('%s', '%s', '%s', '%s',' %s', '%s', '%d', '%s', '%d', '%d', '%s', '%s', '%s')''' % (data['email'], password, data['phone'], data['first_name'], data['second_name'], data['middle_name'], data['gender_id'], data['birthday'], data['country_id'], data['city_id'], data['photo'], data['verification'], data['private'] ) 
        return db.insert(sql, False)


def post_user_auth(data):
    password = hash_pass(data['password'])
    sql = "SELECT * FROM \"User\" WHERE email = '%s' AND password = '%s' OR phone = '%s' AND password = '%s'" % (data['email'], password, data['phone'], password) 
    user_data = db.select(sql, False)
    session = user_data['id']
    randomString = random.getrandbits(10)
    hash = hmac.new(randomString, session, sha1)
    if r.set(hash, session, timeout=7200):
        cookies = make_response(jsonify( { 'cookie': 'set' } ))
        cookies.set_cookie('session', hash);
        return user_data
    return jsonify( { 'Error': 'Invalid e-mail or password' } )