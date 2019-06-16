import React from 'react';
import Photos from './photos';
import Statistics from './statistics'
import './profile.css';
import ContentInput from "./contentInput";
import Posts from "./posts";
import Header from "./header";
import {connect} from "react-redux";

class Profile extends React.Component{
    render(){
        return(
            <div class="profile">
                <div class="profile__photo">
                    <img class="profile__photo__img" src="img/profile-images/photo.jpg"/>
                </div>
                <div class="profile__info">
                    <Header name={this.props.username} status={this.props.status}/>
                    <hr/>
                    <Photos />
                    <Statistics />
                    <ContentInput placeholder="Как прошел Ваш день?"/>
                    <Posts />
                </div>
            </div>
        );
    }
}

const putStateToProps = store => {
    return {
        username: store.username,
        status: store.status
    }
};

export default connect(putStateToProps)(Profile)