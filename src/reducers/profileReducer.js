import {SET_FIRST_NAME, SET_ONLINE_STATUS, SET_SECOND_NAME} from "../actions/profileActions";

const defaultState = {
    firstName: 'Имя',
    secondName: 'Фамилия',
    isOnline: 'онлайн',
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
        case SET_ONLINE_STATUS:
            return {
                ...state,
                secondName: action.payload
            };
    }
    return state
}