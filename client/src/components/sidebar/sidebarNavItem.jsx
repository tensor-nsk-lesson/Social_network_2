import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/sidebar.css'

class SidebarNavItem extends React.Component {
    constructor(props){
        super(props);
        this.url = props.url;
        this.img = props.img;
    }
    render() {
        return (
            <NavLink className="main__leftside__nav-link" to={this.url}>
                <img className="main__leftside__nav-img" src={this.img} alt=""/>
            </NavLink>
        );
    }
}

export default SidebarNavItem;