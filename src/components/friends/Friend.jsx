import React from 'react';
import './friends.css'

class Friend extends React.Component{
    render(){
        return(
            <div className="friend">
                <div className="friend__img">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="friend__info">
                    <a className="friend__info__link" href={this.props.url}>
                        <h3 className="friend__info__header">{this.props.name}</h3>
                    </a>
                    <button className="friend__info__write">Написать сообщение</button>
                </div>
                { this.props.isFriend == 1 ? (
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