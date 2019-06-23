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
            content: 'СодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержаниеСодержание',
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