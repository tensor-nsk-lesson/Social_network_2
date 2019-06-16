import React from 'react';
import Photos from './photos';
import Statistics from './statistics'
import './profile.css';
import ContentInput from "./contentInput";
import Posts from "./posts";
import Header from "./header";

class Profile extends React.Component{
    render(){
        return(
            <div class="profile">
                <div class="profile__photo">
                    <img class="profile__photo__img" src="img/profile-images/photo.jpg"/>
                </div>
                <div class="profile__info">
                    <Header name="Мария Зайцева" status="онлайн"/>
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

export default Profile;