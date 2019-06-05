import psycopg2
from .profile import *
from .groups import *
from .auth import *
from flask import jsonify
import json



def connect_sql():
	return psycopg2.connect(host='90.189.168.29', dbname='social_2', user='social_2', password='social_2')




def select(query, fetch):
	conn = connect_sql()
	ans = []
	try:
		cur = conn.cursor()
		cur.execute(query)
		if fetch:
			columns = [column[0] for column in cur.description]
			for row in cur.fetchall():
				ans.append(dict(zip(columns, row)))
		else:
			columns = [column[0] for column in cur.description]
			for row in cur.fetchone():
				ans.append(dict(zip(columns, row)))

	except Exception as err:
		conn.rollback()
		return '', 500

	finally:
		conn.commit()
		cur.close()
		conn.close()
		return jsonify(ans), 200



def insert(query, fetch):
	conn = connect_sql()
	try:
		cur = conn.cursor()
		cur.execute(query)

	except Exception as err:
		conn.rollback()
		return '', 333

	finally:
		conn.commit()
		cur.close()
		conn.close()
		return '', 200
