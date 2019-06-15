import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props);
        this.placeholder = props.placeholder;
    }
    render(){
        return(
            <div className="main__profile-posts">
                <input className="main__profile-posts__input" type="text" placeholder={this.placeholder}/>
            </div>
        );
    }
}

export default Input;