import React from 'react';
import Post from "../profile/Post";

export default class Messages extends React.Component{
    render(){
        return(
            <div className="messages">
                <Post name="Яна Казанина" content="Всем привет" datetime="16.06.2019 18:12"/>
                <Post name="Антон Чусовитин" content="Здравствуйте" datetime="16.06.2019 18:11"/>
                <Post name="Билл Гейтс" content="Привет!" datetime="16.06.2019 18:10"/>
                <Post name="Линус Товальдс " content="Привет!" datetime="16.06.2019 18:10"/>
                <Post name="Стив Джобс" content="Линус, как курсовая?" datetime="16.06.2019 18:10"/>
                <Post name="Линус Товальдс " content="Отлично!" datetime="16.06.2019 18:10"/>
                <Post name="Линус Товальдс " content="Скоро закончу." datetime="16.06.2019 18:10"/>
            </div>
        );
    }
}