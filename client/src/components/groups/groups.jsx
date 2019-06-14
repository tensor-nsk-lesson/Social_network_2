import React from 'react';
import '../css/groups.css'
import Group from "./group";

class Groups extends React.Component{
    render(){
        return(
            <div>
                <h1>Группы</h1>
                <div className="main__groups">
                    <Group title="Социалочка - Блог разработчиков" desc="Официальная группа соц. сети Социалочка"
                           state='Отписаться'/>
                </div>
            </div>
        );
    }
}

export default Groups;