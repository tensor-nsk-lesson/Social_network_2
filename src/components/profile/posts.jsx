import React from 'react';
import ContentInput from "./contentInput";
import Post from "./post";

class Posts extends React.Component {
    render(){
        return(
            <div>
                <Post name="Мария Зайцева" content="Это мой первый пост!" datetime="13.06.2019 11:14"/>
            </div>
        );
    }
}

export default Posts;