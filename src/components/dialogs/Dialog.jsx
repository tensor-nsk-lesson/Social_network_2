import React from 'react';
import './dialogs.css'
import ContentInput from "../profile/ContentInput";
import DialogListItem from "./DialogListItem";
import Messages from "./Messages";

class Dialog extends React.Component{
    render(){
        return(
            <div className="dialogs">
                <div className="dialog">
                    <h1>Диалог</h1>
                    <Messages />
                    <ContentInput placeholder="Введите сообщение..."/>
                </div>
                <div className="dialogs__list">
                    <h1 className="dialogs__title">Друзья</h1>
                    <DialogListItem name="Антон Чусовитин" status="Онлайн"/>
                </div>
            </div>
        );
    }
}

export default Dialog;