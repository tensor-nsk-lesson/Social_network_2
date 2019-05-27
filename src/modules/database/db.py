import psycopg2
from flask import jsonify
def execute_sql(query):
	conn = psycopg2.connect(host='90.189.168.29', dbname='social_2', user='social_2', password='social_2')
	cur = conn.cursor()
	cur.execute(query)
	try:
		ans = cur.fetchall()
	except Exception as e:
		return e
	finally:
		cur.close()
		conn.close()
		return jsonify(ans)
