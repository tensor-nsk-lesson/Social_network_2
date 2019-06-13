import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/sidebar.css'
import SidebarNavItem from "./sidebarNavItem";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="main__leftside">
                <div className="main__leftside__nav">
                    <SidebarNavItem url="/profile" img={require("../../img/profile.png")}/>
                    <SidebarNavItem url="/friends" img={require("../../img/friends.png")}/>
                    <SidebarNavItem url="/messages" img={require("../../img/messages.png")}/>
                    <SidebarNavItem url="/groups" img={require("../../img/groups.png")}/>
                    <SidebarNavItem url="/settings" img={require("../../img/settings.png")}/>
                    <SidebarNavItem url="/search" img={require("../../img/search.png")}/>
                    <SidebarNavItem url="/notification" img={require("../../img/notification.png")}/>
                    <SidebarNavItem url="/exit" img={require("../../img/exit.png")}/>
                </div>
            </div>
        );
    }
}

export default Sidebar;