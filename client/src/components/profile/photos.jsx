import React from 'react';
import Photo from "./photo";

class Photos extends React.Component{
    render(){
        return(
            <div className="main__profile-information__photos">
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

export default Photos;