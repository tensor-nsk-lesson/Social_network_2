import psycopg2
from flask import jsonify
def execute_sql(query): #Принимаем sql и булеваое значени/ true - вывести все строки таблицы, false - одну строку
	conn = psycopg2.connect(host='90.189.168.29', dbname='social_2', user='social_2', password='social_2')
	cur = conn.cursor()
	cur.execute(query)
	try:
	
			ans = cur.fetchall()
		

	except Exception as e:
		return False
	finally:
		conn.commit()
		cur.close()
		conn.close()
		return jsonify(ans)
