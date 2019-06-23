import React from 'react';
import './dialogs.css'
import DialogListItem from "./DialogListItem";

class DialogList extends React.Component{
    render(){
        return(
            <div className="dialogList">
                    <h1>Диалоги</h1>
                    <DialogListItem name="Яна Казанина"
                                    status="Онлайн"
                                    last_message="Как дела с проектом?"
                                    last_message_time="24.06.2019 11:11"
                                    url="/dialog"
                    />
            </div>
        );
    }
}

export default DialogList;