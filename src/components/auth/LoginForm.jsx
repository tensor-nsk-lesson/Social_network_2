import React from 'react';
import './register.css'
import {NavLink} from "react-router-dom";

export class LoginForm extends React.Component {
    render() {
        return (
            <form className="form" action="">
                <input className="form__input" placeholder="Эл. почта или телефон" type="text"/>
                <input className="form__input" placeholder="Пароль" type="password"/>
                <button className="form__login-button">войти</button>
                <NavLink className="form__register-button" to="/register">
                    зарегистрироваться
                </NavLink>
            </form>
        )
    }
}