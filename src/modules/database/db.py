import psycopg2
from flask import jsonify
def execute_sql(query, line):
	conn = psycopg2.connect(host='90.189.168.29', dbname='social_2', user='social_2', password='social_2')
	cur = conn.cursor()
	cur.execute(query)
	try:
		ans = cur.fetchall()
	except Exception as e:
		return e
	finally:
		conn.commit()
		cur.close()
		conn.close()
		return jsonify(ans)


def check_table(col):
	if col is not None:
		return '*'


def get_data(column, table): # принимает колонку, столбец; если все колонки - передать пустое поле
	column = check_table(column)
	sql = 'SELECT ' + column + ' FROM \"' + table + '\"'
	return execute_sql(sql, True)

def get_data_where(column, table, des, id):# Колонка, столбец, искомое, передоваемый id в url
	column = check_table(column)
	sql = 'SELECT ' + column + ' FROM \"' + table + '\" u WHERE u.' + des + ' = ' + id.__str__()
	return execute_sql(sql, False)

def get_data_where_and(column, table, des, id, addition, addition_value): # Колонка, столбец, искомое, передоваемый id в url, название строки, значение строки
	column = check_table(column)
	sql = 'SELECT ' + column + ' FROM \"' + table + '\" u WHERE u.' + des + ' = ' + id.__str__() + ' AND u.' + addition + ' = ' + addition_value.__str__()
	print(sql)
	return execute_sql(sql, False)