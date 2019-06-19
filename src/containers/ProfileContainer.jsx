import React from 'react';
import Photos from './PhotosContainer';
import Statistics from './StatisticsContainer'
import ContentInput from "../components/profile/contentInput";
import Posts from "./PostsContainer";
import Header from "../components/profile/header";
import {connect} from "react-redux";
import '../components/profile/profile.css';
import {setFirstName} from "../actions/setFirstName";

class ProfileContainer extends React.Component{
    constructor(props){
        super(props);
    }
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
        isOnline: state.isOnline,
    }
};

const mapDispatchToProps = {
    setFirstName: setFirstName
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);