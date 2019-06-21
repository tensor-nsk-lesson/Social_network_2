import React from 'react';
import Post from "../profile/Post";

export default class Messages extends React.Component{
    render(){
        return(
            <div className="messages">
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
                <Post name="Мария Ким" content="Привет!" datetime="16.06.2019 18:11"/>
            </div>
        );
    }
}