import React from 'react';
import './register.css'
import {NavLink} from "react-router-dom";

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFirstNameMethod = this.setFirstNameMethod.bind(this);
        this.setSecondNameMethod = this.setSecondNameMethod.bind(this);
        this.setEmailMethod = this.setEmailMethod.bind(this);
        this.setPasswordMethod = this.setPasswordMethod.bind(this);
    }

    setFirstNameMethod = (event) => {
        this.props.setFirstName(event.target.value);
    };

    setSecondNameMethod = (event) => {
        this.props.setSecondName(event.target.value);
    };

    setEmailMethod = (event) => {
        this.props.setEmail(event.target.value);
    };

    setPasswordMethod = (event) => {
        this.props.setPassword(event.target.value);
    };

    // registerMethod = (event) => {
    //     fetch('/', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: 'json'
    //     })
    //         .then(function (res) {
    //         })
    //         .catch(function (err) {
    //         });
    // };

    render() {
        return (
            <form className="form" action="">
                <input value={this.props.firstName}
                       onChange={this.setFirstNameMethod}
                       className="form__input"
                       placeholder="Имя"
                       type="text"
                />
                <input value={this.props.secondName}
                       onChange={this.setSecondNameMethod}
                       className="form__input"
                       placeholder="Фамилия"
                       type="text"
                />
                <input value={this.props.email}
                       onChange={this.setEmailMethod}
                       className="form__input"
                       placeholder="Эл. почта"
                       type="text"
                />
                <input value={this.props.password}
                       onChange={this.setPasswordMethod}
                       className="form__input"
                       placeholder="Пароль"
                       type="password"
                />
                <NavLink className="form__register-button" to="/profile">
                    зарегистрироваться
                </NavLink>
                <NavLink className="form__login-button" to="/login">
                    войти
                </NavLink>
            </form>
        )
    }
}