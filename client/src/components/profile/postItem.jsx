import React from 'react';

class PostItem extends React.Component{
    constructor(props) {
        super(props);
        this.photo = props.photo;
        this.name = props.name;
        this.content = props.content;
        this.datetime = props.datetime;
    }
    render(){
        return(
            <div className="main__profile-post">
                <div className="main__profile-post__user">
                    <img src="img/profile-images/post1.jpg" alt=""/>
                    <div className="main__profile-post__user__information">
                        <h3>
                            {/*<span>М</span>ария <span>З</span>айцева*/}
                            {this.name}
                        </h3>
                        <h5>{this.content}</h5>
                    </div>
                </div>
                <h5>{this.datetime}</h5>
            </div>
        );
    }
}

export default PostItem;