from jsonschema import validate 
import json

def valid(data, check_schema):
    return validate(data, schema=check_schema) or 'krk'
