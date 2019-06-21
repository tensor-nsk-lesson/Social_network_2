import React from 'react';
import StatisticsItem from "../components/profile/StatisticsItems";
import {connect} from "react-redux";

class StatisticsContainer extends React.Component{
    render(){
        let statisticsItems = [];
        for (let i = 0; i < this.props.statistics.length; i++) {
            statisticsItems.push(<StatisticsItem count={this.props.statistics[i].count} title={this.props.statistics[i].title} />);
        }
        return <div className="profile_info_stat">{statisticsItems}</div>;
    }
}

const mapStateToProps = store => {
    return {
        statistics: store.profile.statistics
    }
};

export default connect(mapStateToProps)(StatisticsContainer)