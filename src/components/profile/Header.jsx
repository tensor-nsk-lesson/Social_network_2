import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.isOnline = props.isOnline;
    }
    render(){
        return(
            <div className="profile__info__header">
                <h1>
                    {/*<span>М</span>ария <span>З</span>айцева*/}
                    {this.name}
                </h1>
                <h3>{this.isOnline}</h3>
            </div>
        );
    }
}

export default Header;