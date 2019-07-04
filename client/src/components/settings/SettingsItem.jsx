import React from "react";
import ContentInput from "../profile/ContentInput";

class SettingsItem extends React.Component{
    render() {
        return(
            <div onChange={this.props.onChangeMethod} className="settings__profile__data">
                <p>{this.props.title}</p>
                <ContentInput type={this.props.type} value={this.props.value}/>
            </div>
        )
    }
}

export default SettingsItem;