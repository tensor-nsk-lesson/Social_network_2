import React from 'react';
import Photos from './PhotosContainer';
import Statistics from './StatisticsContainer'
import ContentInput from "../components/profile/ContentInput";
import Posts from "./PostsContainer";
import Header from "../components/profile/Header";
import {connect} from "react-redux";
import '../components/profile/profile.css';
import {setFirstName} from "../actions/profileActions";

class ProfileContainer extends React.Component{
    render(){
        return(
            <div className="profile">
                <div className="profile__photo">
                    <img className="profile__photo__img" src="img/profile-images/photo.jpg"/>
                </div>
                <div className="profile__info">
                    <Header name={`${this.props.firstName} ${this.props.secondName}`} isOnline={this.props.isOnline}/>
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

const mapStateToProps = state => {
    return {
        firstName: state.profile.firstName,
        secondName: state.profile.secondName,
        isOnline: state.profile.isOnline,
    }
};


export default connect(mapStateToProps)(ProfileContainer);