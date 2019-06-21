import React from 'react';
import './friends.css'

class Friend extends React.Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.name = props.name;
        this.isFriend = props.isFriend;
    }
    render(){
        return(
            <div className="friend">
                <div className="friend__img">
                    <img src={this.img} alt=""/>
                </div>
                <div className="friend__info">
                    <a className="friend__info__link" href="">
                        <h3 className="friend__info__header">{this.name}</h3>
                    </a>
                    <button className="friend__info__write">Написать сообщение</button>
                </div>
                { this.isFriend == 1 ? (
                    <button className="friend__delete">
                        Удалить из друзей
                    </button>
                    ) : (
                        <button className="friend__add">
                            Добавить в друзья
                        </button>
                    )
                }
            </div>
        );
    }
}

export default Friend;