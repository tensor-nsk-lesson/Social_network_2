import psycopg2
from flask import Flask, jsonify, request
from modules.routes import *

app = Flask(__name__)


if __name__ == '__main__':
    app.run(host='localhost', debug=True) 