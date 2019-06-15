import psycopg2
from flask import Flask
import os
app = Flask(__name__)


from modules.routes import *


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='', port=port, debug=True)