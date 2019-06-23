import React from 'react';

export default class DialogListItem extends React.Component{
    render(){
        return(
            <div className="dialogList__dialog">
                <div className="dialog__info">
                    <div className="user__img">
                        <img src="" alt=""/>
                    </div>
                    <div className="user__info">
                        <a href={this.props.url}>{this.props.name}</a>
                        <p>{this.props.status}</p>
                    </div>
                </div>
                <p className="dialog__message">{this.props.last_message}</p>
                <p className="dialog__message__time">{this.props.last_message_time}</p>
            </div>
        );
    }
}