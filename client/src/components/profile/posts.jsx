import React from 'react';
import Input from "./input";
import PostItem from "./postItem";

class Posts extends React.Component {
    render(){
        return(
            <div>
                <PostItem name="Мария Зайцева" content="Это мой первый пост!" datetime="13.06.2019 11:14"/>
            </div>
        );
    }
}

export default Posts;