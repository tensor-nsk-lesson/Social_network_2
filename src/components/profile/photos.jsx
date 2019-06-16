import React from 'react';
import Photo from "./photo";
import {connect} from "react-redux";
import StatisticsItem from "./statisticsItem";

class Photos extends React.Component{
    render(){
        let photos = [];
        for (let i = 0; i < this.props.photos.length; i++) {
            photos.push(<Photo url={this.props.photos[i].url}/>);
        }
        return <div className="profile__info__photos">{photos}</div>;
        return(
            <div className="profile__info__photos">
                {/*
                * img={require('img/profile-images/p1.jpg')}
                */}
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                <Photo />
            </div>
        );
    }
}

const putStateToProps = store => {
    return {
        photos: store.photos
    }
}

export default connect(putStateToProps)(Photos);