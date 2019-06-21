import React from 'react';
import '../components/auth/register.css'
import {LoginForm} from "../components/auth/LoginForm";
import {setEmail, setFirstName, setPassword, setSecondName} from "../actions/profileActions";
import {connect} from "react-redux";
import RegisterForm from "../components/auth/RegisterForm";

class RegisterContainer extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main__leftside"></div>
                <div className="main__rightside">
                    <a className="logo" href="/">C</a>
                    <h1 className="head">Регистрация</h1>
                    <p className="desc">Присоединяйтесь к миллионам!</p>
                    {this.props.isLogin == 0 ? (
                        <RegisterForm
                            firstName={this.props.firstName}
                            setFirstName={this.props.setFirstName}
                            secondName={this.props.secondName}
                            setSecondName={this.props.setSecondName}
                            email={this.props.email}
                            setEmail={this.props.setEmail}
                            password={this.props.password}
                            setPassword={this.props.setPassword}
                        />
                    ) : (
                        <LoginForm/>
                    )
                    }
                    <div className="download-buttons">
                        <a className="download-buttons__link" href="">
                            <img className="download-buttons__img" src="img/google-play.png" alt=""/>
                        </a>
                        <a className="download-buttons__link" href="">
                            <img className="download-buttons__img" src="img/app-store.png" alt=""/>
                        </a>
                    </div>
                    <ul className="bottom-navbar">
                        <li className="bottom-navbar__item">
                            <a className="bottom-navbar__item__link" href="">API</a>
                        </li>
                        <li className="bottom-navbar__item">
                            <a className="bottom-navbar__item__link" href="">Служба поддержки</a>
                        </li>
                        <li className="bottom-navbar__item">
                            <a className="bottom-navbar__item__link" href="">Блог</a>
                        </li>
                        <li className="bottom-navbar__item">
                            <a className="bottom-navbar__item__link" href="">О компании</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.profile.firstName,
        secondName: state.profile.secondName,
        email: state.profile.email,
        password: state.profile.password,
        isOnline: state.profile.isOnline,
    }
};

const mapDispatchToProps = {
    setFirstName,
    setSecondName,
    setEmail,
    setPassword
};


export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);