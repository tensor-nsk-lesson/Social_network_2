import React from "react";

class PostsInput extends React.Component{
    render(){
        return(
            <div className="main__profile-posts">
                <input className="main__profile-posts__input" type="text" placeholder="Как прошел Ваш день?"/>
            </div>
        );
    }
}

export default PostsInput;