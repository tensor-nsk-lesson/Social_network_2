import {SET_EMAIL, SET_FIRST_NAME, SET_PASSWORD, SET_SECOND_NAME} from "../actions/profileActions";

const defaultState = {
    firstName: '',
    secondName: '',
    email: '',
    isOnline: 'онлайн',
    password: '',
    statistics: [
        {
            count: 'кол-во',
            title: 'назв.'
        },
        {
            count: 'кол-во',
            title: 'назв.'
        },
        {
            count: 'кол-во',
            title: 'назв.'
        },
        {
            count: 'кол-во',
            title: 'назв.'
        }
    ],
    posts: [
        {
            name: 'Имя Фамилия',
            content: 'Содержание',
            datetime: '00.00.00 00:00'
        }
    ],
    photos: [
        {
            url: 'url'
        },
        {
            url: 'url'
        },
        {
            url: 'url'
        },
        {
            url: 'url'
        },
        {
            url: 'url'
        }
    ],
    friends: [
        {
            name: 'Антон Чусовитин'
        },
        {
            name: 'Яна Казанина'
        },

    ],
    groups: [
        {
            title: 'Тензор',
            desc: 'Лучшая компания в мире',
        }
    ]
};

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case SET_SECOND_NAME:
            return {
                ...state,
                secondName: action.payload
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
    }
    return state
};