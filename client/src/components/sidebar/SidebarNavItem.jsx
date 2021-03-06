import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

class SidebarNavItem extends React.Component {
    constructor(props){
        super(props);
        this.url = props.url;
        this.img = props.img;
    }
    render() {
        return (
            <NavLink className="main__navbar__items__navlink" to={this.url}>
                <img className="main__navbar__items__img" src={this.img} alt=""/>
            </NavLink>
        );
    }
}

export default SidebarNavItem;