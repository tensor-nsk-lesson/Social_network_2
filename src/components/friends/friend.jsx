import React from 'react';
import '../css/friends.css'

class Friend extends React.Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.name = props.name;
        this.isFriend = props.isFriend;
    }
    render(){
        return(
            <div className="main__friend">
                <div className="main__friend__img">
                    <img src={this.img} alt=""/>
                </div>
                <div className="main__friend__info">
                    <a className="main__friend__info__link" href="">
                        <h3 className="main__friend__info__header">{this.name}</h3>
                    </a>
                    <button className="main__friend__info__writeBtn">Написать сообщение</button>
                </div>
                { this.isFriend == 1 ? (
                    <button className="main__friend__deleteFriend">
                        Удалить из друзей
                    </button>
                    ) : (
                        <button className="main__friend__addFriend">
                            Добавить в друзья
                        </button>
                    )
                }
            </div>
        );
    }
}

export default Friend;