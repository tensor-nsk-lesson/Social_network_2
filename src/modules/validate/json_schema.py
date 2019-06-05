

#group
sch_new_group = {
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'pattern': '^[А-Яа-яA-Za-z0-9 ]+$'
            },
        'topic': {
            'type': 'number',
            'pattern': '^[0-9]+$'
            },
        'photo': {
            'type': 'string',
            'pattern': ''
            },
        'desc': {
            'type' : 'string',
            'pattern': '^[А-я\w \d\s\x00-\x1F\x7F\x20-\x7E]+$'
            }
    },
    'required': ['name', 'topic', 'photo']
}


sch_new_group_post = {
    'type': 'object',
    'properties': {
        'content_id': {
            'type': 'number',
            'pattern': '^[0-9]+$'
            },
        'content': {
            'type': 'number',
            'pattern': '^[А-я\w \d\s\x00-\x1F\x7F\x20-\x7E]+$'
            }
    },
    'required': ['content_id', 'content']
}


sch_new_group_admin = {
    'type': 'object',
    'properties': {
        'user_id': {
            'type': 'number',
            'pattern': '^[0-9]+$'
            },
        'roles': {
            'type': 'number',
            'pattern': '^[0-9]+$'
            }
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