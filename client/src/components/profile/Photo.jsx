import React from 'react';

class Photo extends React.Component {
    constructor(props){
        super(props);
        this.img = props.img;
    }
    render() {
        return (
            <img className="profile__info__photos__img" src={this.img}/>
        );
    }
}

export default Photo;