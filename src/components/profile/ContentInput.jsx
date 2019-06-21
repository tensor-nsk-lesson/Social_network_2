import React from "react";

class ContentInput extends React.Component{
    constructor(props){
        super(props);
        this.placeholder = props.placeholder;
    }
    render(){
        return(
            <div className="content">
                <input className="content__input" type="text" placeholder={this.placeholder}/>
            </div>
        );
    }
}

export default ContentInput;