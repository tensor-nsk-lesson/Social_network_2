import React from 'react';
import Photos from './PhotosContainer';
import Statistics from './StatisticsContainer'
import ContentInput from "../components/profile/ContentInput";
import Posts from "./PostsContainer";
import Header from "../components/profile/Header";
import {connect} from "react-redux";
import '../components/profile/profile.css';

class ProfileContainer extends React.Component{
    render(){
        return(
            <div className="profile">
                <div className="profile2">
                    <div className="profile__photo">
                        <img className="profile__photo__img" src="img/profile-images/photo.jpg"/>
                    </div>
                    <div className="profile__info">
                        <Header name={`${this.props.profile.firstName} ${this.props.profile.secondName}`} isOnline={this.props.profile.isOnline}/>
                        <hr/>
                        <Photos />
                        <Statistics />
                    </div>
                </div>
                <ContentInput placeholder="Как прошел Ваш день?"/>
                <Posts />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
};


export default connect(mapStateToProps)(ProfileContainer);