

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
            'pattern': '^data:image\/([a-zA-Z]*);base64,([^\"]*)'
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
        'email':        {
            'type': 'string',
            'pattern': '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'
            },
        'password':     {
            'type': 'string',
            'pattern': '^[0-9a-zA-Z]+$'
            },
        'phone':        {
            'type': 'string',
            'pattern': '^7-([0-9]){3}-([0-9]){3}-([0-9]){2}-([0-9]){2}$'
            },
        'first_name':   {
            'type': 'string',
            'pattern': '^[A-я-]+$'
            },
        'second_name':  {
            'type': 'string',
            'pattern': '^[A-я-]+$'
            },
        'middle_name':  {
            'type': 'string',
            'pattern': '^[A-я-]+$'
            },
        'gender_id':    {
            'type': 'number',
            'pattern': '^[0-9]+$'
            },
        'birthday':     {
            'type': 'string',
            'pattern': '^[0-9-]+$'
            },
        'country_id':   {
            'type': 'number',
            'pattern': '^[0-9]+$'
            },
        'city_id':      {
            'type': 'number',
            'pattern': '^[0-9]+$'
            },
        'photo':        {
            'type': 'string',
            'pattern': '^data:image\/([a-zA-Z]*);base64,([^\"]*)'
            },
        'verification': {
            'type': 'string',
            'pattern': '^(true|false)$'
            },
        'private':      {
            'type': 'string',
            'pattern': '^(true|false)$'
            }
    },
    'required': ['email', 'password', 'phone', 'first_name', 'second_name', 'middle_name', 'gender_id', 'birthday', 'country_id', 'country_id', 'country_id', 'verification', 'photo', 'private']
}

sch_user_auth = {
    'type': 'object',
    'properties': {
        'email': {
            'type': 'string',
            'pattern': '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'
            },
        'phone': {
            'type': 'string',
            'pattern': '^7-([0-9]){3}-([0-9]){3}-([0-9]){2}-([0-9]){2}$'
            }
    },
    'required': ['email', 'phone']
}

#user

# как пофиксим sql запросы лобавить схемы для json