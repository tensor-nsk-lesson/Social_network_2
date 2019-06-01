import psycopg2
from .profile import *
from .groups import *
from .auth import *
from flask import jsonify


def execute_sql(query, fetch):
	conn = psycopg2.connect(host='90.189.168.29', dbname='social_2', user='social_2', password='social_2')
	cur = conn.cursor()
	cur.execute(query)
	ans = []
	try:
		if fetch:
			ans = cur.fetchall()
		else:
			ans = cur.fetchone()

	except Exception as err:
		return '', 500
	finally:
		conn.commit()
		cur.close()
		conn.close()
		if ans:
			return jsonify(ans)
		else:
			return '', 200
