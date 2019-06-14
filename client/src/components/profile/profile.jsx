import React from 'react';
import Photos from './photos';
import Statistics from './statistics'
import '../css/profile.css';
import Input from "./input";
import Posts from "./posts";
import ProfileHeader from "./profileHeader";

class Profile extends React.Component{
    render(){
        return(
            <div class="main__profile">
                <div class="main__photo-user">
                    <img class="main__photo-user_img" src="img/profile-images/photo.jpg"/>
                </div>
                <div class="main__profile-information">
                    <ProfileHeader name="Мария Зайцева" status="онлайн"/>
                    <hr/>
                    <Photos />
                    <Statistics />
                    <Input placeholder="Как прошел Ваш день?"/>
                    <Posts />
                </div>
            </div>
        );
    }
}

export default Profile;