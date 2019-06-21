import React from "react";

class ContentInput extends React.Component {
    render() {
        return (
            <input className="content__input"
                   placeholder={this.props.placeholder}
                   value={this.props.value}
                   type={this.props.type}
            />
        );
    }
}

export default ContentInput;