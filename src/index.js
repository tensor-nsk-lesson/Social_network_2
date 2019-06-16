import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const initialState = {
    isAuth: 0,
    username: 'Имя Фамилия',
    status: 'статус',
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
    ]
};

export function rootReducer(state = initialState) {
    return state
}

const store = createStore(rootReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
