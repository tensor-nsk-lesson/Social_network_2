import React from "react";

class ProfileHeader extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.status = props.status;
    }
    render(){
        return(
            <div className="main__profile-information__header">
                <h1>
                    {/*<span>М</span>ария <span>З</span>айцева*/}
                    {this.name}
                </h1>
                <h3>{this.status}</h3>
            </div>
        );
    }
}

export default ProfileHeader;