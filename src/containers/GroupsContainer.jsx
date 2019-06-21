import React from 'react';
import '../components/groups/groups.css'
import Group from "../components/groups/Group";
import {connect} from "react-redux";

class GroupsContainer extends React.Component{
    render(){
        let groups = [];
        for (let i = 0; i < this.props.groups.length; i++) {
            groups.push(<Group title={this.props.groups[i].title} desc={this.props.groups[i].desc}
                              state='Отписаться'/>);
        }
        return <div className="groups"><h1>Группы</h1>{groups}</div>;
    }
}
const mapStateToProps = store => {
    return {
        groups: store.profile.groups
    }
};

export default connect(mapStateToProps)(GroupsContainer);