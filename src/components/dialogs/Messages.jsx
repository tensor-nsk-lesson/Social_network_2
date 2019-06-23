import React from 'react';
import Post from "../profile/Post";

export default class Messages extends React.Component{
    render(){
        return(
            <div className="messages">
                <Post name="Яна Казанина" content="Привет!" datetime="16.06.2019 18:11"/>
            </div>
        );
    }
}