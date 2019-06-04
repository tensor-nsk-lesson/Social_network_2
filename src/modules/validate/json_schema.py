

#group
sch_new_group = {
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'pattern': '[^A-Za-z0-9_]'
            },
        'topic': {'type': 'number'},
        'photo': {'type': 'string'},
        'desc': {'type' : 'string'}
    },
    'required': ['name', 'topic', 'photo']
}


sch_new_group_post = {
    'type': 'object',
    'properties': {
        'content_id': {'type': 'number'},
        'content': {'type': 'number'}
    },
    'required': ['content_id', 'content']
}


sch_new_group_admin = {
    'type': 'object',
    'properties': {
        'user_id': {'type': 'number'},
        'roles': {'type': 'number'}
    },
    'required': ['user_id', 'roles']
}


#auth
sch_new_user = {
    'type': 'object',
    'properties': {
        'email':        {'type': 'string'},
        'password':     {'type': 'number'},
        'phone':        {'type': 'string'},
        'first_name':   {'type': 'string'},
        'second_name':  {'type': 'string'},
        'middle_name':  {'type': 'string'},
        'gender_id':    {'type': 'number'},
        'birthday':     {'type': 'string'},
        'country_id':   {'type': 'number'},
        'city_id':      {'type': 'number'},
        'photo':        {'type': 'string'},
        'verification': {'type': 'string'},
        'private':      {'type': 'string'}
    },
    'required': ['user_id', 'roles']
}

sch_user_auth = {
    'type': 'object',
    'properties': {
        'email': {'type': 'string'},
        'phone': {'type': 'string'}
    },
    'required': ['user_id', 'roles']
}

#user

# как пофиксим sql запросы лобавить схемы для json