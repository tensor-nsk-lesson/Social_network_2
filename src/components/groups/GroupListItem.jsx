import React from 'react';
import './GroupList.css'

class GroupListItem extends React.Component{
    render(){
        return(
            <div className="groupListItem">
                <div className="groupListItem__img">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="groupListItem__info">
                    <a class="groupListItem__info__link" href={this.props.url}>
                        <h3 class="groupListItem__info__title">{this.props.title}</h3>
                    </a>
                    <h5 class="groupListItem__info__desc">{this.props.desc}</h5>
                </div>
                <button className="groupListItem__action">
                    {this.props.state}
                </button>
            </div>
        );
    }
}

export default GroupListItem;