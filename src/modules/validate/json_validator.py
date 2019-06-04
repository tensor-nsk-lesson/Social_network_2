from jsonschema import validate 
import json
from .json_schema import * 

def valid(data, schema):
    print(data['name'])
   # validate(data, schema=schema)