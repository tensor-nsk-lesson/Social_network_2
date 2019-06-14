import React from 'react';
import '../css/groups.css'

class Group extends React.Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.title = props.title;
        this.desc = props.desc;
        this.state = props.state;
    }
    render(){
        return(
            <div className="main__group">
                <div className="main__group__img">
                    <img src={this.img} alt=""/>
                </div>
                <div className="main__group__info">
                    <a class="main__group__info__link" href="">
                        <h3 class="main__group__info__title">{this.title}</h3>
                    </a>
                    <h5 class="main__group__info__desc">{this.desc}</h5>
                </div>
                <button className="main__group__action">
                    {this.state}
                </button>
            </div>
        );
    }
}

export default Group;