import React from 'react';
import './settings.css'
import ContentInput from "../profile/ContentInput";
import {connect} from "react-redux";
import {setEmail, setFirstName, setPassword, setSecondName} from "../../actions/profileActions";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.setFirstNameMethod = this.setFirstNameMethod.bind(this);
        this.setSecondNameMethod = this.setSecondNameMethod.bind(this);
        this.setEmailMethod = this.setEmailMethod.bind(this);
        // this.oldPasswordCheck = this.oldPasswordCheck.bind(this);
        // this.isOldPassword = null;
    }

    setFirstNameMethod = (event) => {
        this.props.setFirstName(event.target.value);
    };
    setSecondNameMethod = (event) => {
        this.props.setSecondName(event.target.value);
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
    // oldPasswordCheck = (event) => {
    //     if (event.target.value == this.props.password) {
    //         this.isOldPassword = true;
    //         console.log(this.isOldPassword)
    //     } else {
    //         this.isOldPassword = false;
    //     }
    //
    // };

    render() {
        return (
            <div className="settings">
                <h1>Настройки</h1>
                <div className="settings__profile">
                    <div onChange={this.setFirstNameMethod} className="settings__profile__data">
                        <p>Имя:</p>
                        <ContentInput value={this.props.firstName}/>
                    </div>
                    <div onChange={this.setSecondNameMethod} className="settings__profile__data">
                        <p>Фамилия:</p>
                        <ContentInput value={this.props.secondName}/>
                    </div>
                    <hr/>
                    <div onChange={this.setEmailMethod} className="settings__profile__data">
                        <p>Эл. почта:</p>
                        <ContentInput value={this.props.email}/>
                    </div>
                    <hr/>
                    <div onChange={this.oldPasswordCheck} className="settings__profile__data">
                        <p>Старый пароль:</p>
                        <ContentInput type="password"/>
                    </div>
                    <div onChange={this.setPasswordMethod} className="settings__profile__data">
                        <p>Новый пароль:</p>
                        <ContentInput type="password"/>
                    </div>
                    <div onChange={this.setPasswordMethod} className="settings__profile__data">
                        <p>Ещё раз новый пароль:</p>
                        <ContentInput type="password"/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.profile.firstName,
        secondName: state.profile.secondName,
        email: state.profile.email,
        password: state.profile.password
    }
};

const mapDispatchToProps = {
    setFirstName,
    setSecondName,
    setEmail,
    setPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);