import React from 'react';

export default class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.name = props.name;
        this.status = props.status;
    }
    render(){
        return(
            <div className="listOfDialogs__dialog">
                <img src="" alt=""/>
                <div>
                    <a href="">{this.name}</a>
                    <h4>{this.status}</h4>
                </div>
            </div>
        );
    }
}