import React from 'react';

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.photo = props.photo;
        this.name = props.name;
        this.content = props.content;
        this.datetime = props.datetime;
        this.url = props.url;
    }
    render(){
        return(
            <div className="profile__post">
                <div className="profile__post__user">
                    <img src="img/profile-images/post1.jpg" alt=""/>
                    <div className="profile__post__userinfo">
                        <a className="profile__post__username" href="#">
                            {/*<span>М</span>ария <span>З</span>айцева*/}
                            {this.name}
                        </a>
                        <p>{this.content}</p>
                    </div>
                </div>
                <h5>{this.datetime}</h5>
            </div>
        );
    }
}

export default Post;