import psycopg2
from .profile import *
from .groups import *
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
