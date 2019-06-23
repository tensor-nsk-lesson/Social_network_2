import React from 'react';
import './settings.css'
import ContentInput from "../profile/ContentInput";
import {connect} from "react-redux";
import {setEmail, setFirstName, setPassword, setSecondName} from "../../actions/profileActions";
import SettingsItem from "./SettingsItem";

class SettingsContainer extends React.Component {
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
                    <SettingsItem onChangeMethod={this.setFirstNameMethod} title="Имя" value={this.props.profile.firstName}/>
                    <SettingsItem onChangeMethod={this.setSecondNameMethod} title="Фамилия" value={this.props.profile.secondName}/>
                    <hr/>
                    <SettingsItem onChangeMethod={this.setEmailMethod} title="Эл. почта" value={this.props.profile.email}/>
                    <hr/>
                    <SettingsItem onChangeMethod={this.oldPasswordCheck} title="Старый пароль:" type="password"/>
                    <SettingsItem onChangeMethod={this.setPasswordMethod} title="Новый пароль:" type="password"/>
                    <SettingsItem onChangeMethod={this.setPasswordMethod} title="Ещё раз новый пароль:" type="password"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
};

const mapDispatchToProps = {
    setFirstName,
    setSecondName,
    setEmail,
    setPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);