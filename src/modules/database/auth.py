from . import db
 
def post_user_new(data):
    sql = '''INSERT INTO \"User\" (email, password, phone, first_name, second_name, middle_name, gender_id, birthday, country_id, city_id, photo, verification, private) 
            VALUES ('%s', '%s', '%s', '%s',' %s', '%s', '%d', '%s', '%d', '%d', '%s', '%s', '%s')'''%(data['email'], data['password'], data['phone'], data['first_name'], data['second_name'], data['middle_name'], data['gender_id'], data['birthday'], data['country_id'], data['city_id'], data['photo'], data['verification'], data['private'] ) 
    return db.execute_sql(sql, False)

