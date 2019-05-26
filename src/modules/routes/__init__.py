from flask import Blueprint

routes = Blueprint('routes', __name__)


from .profile import *
from .groups import *
from .dialogs import *