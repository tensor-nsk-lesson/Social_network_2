import React from 'react';
import './dialogs.css'
import ContentInput from "../profile/ContentInput";
import Dialog from "./Dialog";
import Messages from "./Messages";

class Dialogs extends React.Component{
    render(){
        return(
            <div className="dialogs">
                <div className="listOfDialogs">
                    <h2>Друзья</h2>
                    <Dialog name="Мария Ким" status="Онлайн"/>
                </div>
                <div className="dialog">
                    <h2>Диалог</h2>
                    <Messages />
                    <ContentInput placeholder="Введите сообщение..."/>
                </div>
            </div>
        );
    }
}

export default Dialogs;