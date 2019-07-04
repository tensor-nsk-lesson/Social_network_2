import React from 'react';
import './dialogs.css'
import DialogListItem from "./DialogListItem";

class DialogList extends React.Component{
    render(){
        return(
            <div className="dialogList">
                    <h1>Диалоги</h1>
                <DialogListItem name="Сергей Есенин"
                                status="Онлайн"
                                last_message="Помоги с домашкой."
                                last_message_time="24.06.2019 11:11"
                                url="/dialog"
                />
                <DialogListItem name="Михаил Булгаков"
                                status="Онлайн"
                                last_message="Пойдешь сегодня в бар?"
                                last_message_time="24.06.2019 12:34"
                                url="/dialog"
                />
                <DialogListItem name="Владимир Ульянов"
                                status="Онлайн"
                                last_message="Хочешь познакомлю тебя с Марксом?"
                                last_message_time="24.06.2019 14:18"
                                url="/dialog"
                />
                <DialogListItem name="Владимир Высоцкий"
                                status="Онлайн"
                                last_message="Давай загрузим всё на iTunes?"
                                last_message_time="24.06.2019 14:18"
                                url="/dialog"
                />
                <DialogListItem name="Лев Толстой"
                                status="Онлайн"
                                last_message="Прикинь, березу на 6 страниц описал! o.O"
                                last_message_time="24.06.2019 14:29"
                                url="/dialog"
                />
            </div>
        );
    }
}

export default DialogList;