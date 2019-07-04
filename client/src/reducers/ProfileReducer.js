import {
    MAP_FRIENDS_TO_STORE, MAP_GROUPS_TO_STORE,
    SET_EMAIL,
    SET_FIRST_NAME,
    SET_PASSWORD,
    SET_SECOND_NAME
} from "../actions/profileActions";

const defaultState = {
    auth: 0,
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    isOnline: '',
    statistics: [
        {
            count: '12',
            title: 'друзей'
        },
        {
            count: '34',
            title: 'фотографии'
        },
        {
            count: '18',
            title: 'подписок'
        },
        {
            count: '3',
            title: 'поста'
        }
    ],
    posts: [
        {
            name: 'Владимир Маяковский',
            content: 'А вы любите розы?',
            datetime: '24.06.2019 18:35'
        },
        {
            name: 'Владимир Маяковский',
            content: 'Послушайте! Ведь, если звёзды зажигают - значит - это кому-нибудь нужно?',
            datetime: '24.06.2019 18:40'
        },
        {
            name: 'Владимир Маяковский',
            content: 'Терпеть не могущий красивенькое.',
            datetime: '24.06.2019 18:45'
        },
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
        },
        {
            url: 'url'
        }
    ],
    friends: [],
    subscriptions: []
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
        case MAP_FRIENDS_TO_STORE:
            return {
                ...state,
                friends: action.payload
            };
        case MAP_GROUPS_TO_STORE:
            return {
                ...state,
                subscriptions: action.payload
            };
    }
    return state
};