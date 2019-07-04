import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div className="profile__info__header">
                <h1 className="profile__info__name">
                    {/*<span>М</span>ария <span>З</span>айцева*/}
                    {this.props.name}
                </h1>
                <h3>{this.props.isOnline}</h3>
            </div>
        );
    }
}

export default Header;