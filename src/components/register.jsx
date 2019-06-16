import React from 'react';
import './register.css'
import {NavLink} from "react-router-dom";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.isLogin = props.isLogin;
    }
    render(){
        return(
            <div className="main">
                <div className="main__leftside"></div>
                <div className="main__rightside">
                    <a className="main_rightside_logo" href="/">C</a>
                    <h1 className="main__rightside__head">Регистрация</h1>
                    <p className="main__rightside__desc">Присоединяйтесь миллионам!</p>
                    { this.isLogin == 0 ? (
                        <form className="main__rightside__form" action="">
                            <input className="main__rightside__form__input" placeholder="Ваше имя" type="text"/>
                            <input className="main__rightside__form__input" placeholder="Ваша фамилия" type="text"/>
                            <input className="main__rightside__form__input" placeholder="Эл. почта или телефон" type="text"/>
                            <input className="main__rightside__form__input" placeholder="Пароль" type="password"/>
                            <button className="main__rightside__form__register-button">зарегистрироваться</button>
                            <NavLink className="main__rightside__form__login-button" to="/login">
                                войти
                            </NavLink>
                        </form>
                    ):(
                        <form className="main__rightside__form" action="">
                            <input className="main__rightside__form__input" placeholder="Эл. почта или телефон" type="text"/>
                            <input className="main__rightside__form__input" placeholder="Пароль" type="password"/>
                            <button className="main__rightside__form__login-button">войти</button>
                            <NavLink className="main__rightside__form__register-button" to="/register">
                                зарегистрироваться
                            </NavLink>
                        </form>
                    )
                    }
                    <div className="main__rightside__download-buttons">
                        <a className="main__rightside__download-buttons__link" href="">
                            <img className="main__rightside__download-buttons__img" src="img/google-play.png" alt=""/>
                        </a>
                        <a className="main__rightside__download-buttons__link" href="">
                            <img className="main__rightside__download-buttons__img" src="img/app-store.png" alt=""/>
                        </a>
                    </div>
                    <ul className="main__rightside__bottom-navbar">
                        <li className="main__rightside__bottom-navbar__navbar-item">
                            <a className="main__rightside__bottom-navbar__navbar-item__link" href="">API</a>
                        </li>
                        <li className="main__rightside__bottom-navbar__navbar-item">
                            <a className="main__rightside__bottom-navbar__navbar-item__link" href="">Служба
                                поддержки</a>
                        </li>
                        <li className="main__rightside__bottom-navbar__navbar-item">
                            <a className="main__rightside__bottom-navbar__navbar-item__link" href="">Блог</a>
                        </li>
                        <li className="main__rightside__bottom-navbar__navbar-item">
                            <a className="main__rightside__bottom-navbar__navbar-item__link" href="">О компании</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Register;