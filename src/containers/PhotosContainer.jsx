import React from 'react';
import Photo from "../components/profile/photo";
import {connect} from "react-redux";

class PhotosContainer extends React.Component{
    render(){
        let photos = [];
        for (let i = 0; i < this.props.photos.length; i++) {
            photos.push(<Photo url={this.props.photos[i].url}/>);
        }
        return <div className="profile__info__photos">{photos}</div>;
    }
}

const putStateToProps = store => {
    return {
        photos: store.profile.photos
    }
}

export default connect(putStateToProps)(PhotosContainer);