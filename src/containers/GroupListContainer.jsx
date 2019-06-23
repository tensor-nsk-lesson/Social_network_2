import React from 'react';
import '../components/groups/GroupList.css'
import GroupListItem from "../components/groups/GroupListItem";
import {connect} from "react-redux";
import {mapGroupsToStore} from "../actions/profileActions";

const groups_data = [
    {
        title: 'Тензор',
        desc: 'Российская IT-компания',
        url: 'http://localhost:3000/group'
    },
    {
        title: 'СБИС электронная отчетность и документооборот',
        desc: 'Cеть деловых коммуникаций',
        url: ''
    }
];


class GroupListContainer extends React.Component{
    componentDidMount() {
        this.props.mapGroupsToStore(groups_data)
    }
    render(){
        let groups = [];
        for (let i = 0; i < this.props.groups.length; i++) {
            groups.push(<GroupListItem url={this.props.groups[i].url} title={this.props.groups[i].title} desc={this.props.groups[i].desc}
                                       state='Отписаться'/>);
        }
        return <div className="groups"><h1>Группы</h1>{groups}</div>;
    }
}
const mapStateToProps = store => {
    return {
        groups: store.profile.subscriptions
    }
};

const mapDispatchToProps = {
    mapGroupsToStore
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupListContainer);