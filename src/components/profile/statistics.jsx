import React from 'react';
import StatisticsItem from "./statisticsItem";
import {connect} from "react-redux";

class Statistics extends React.Component{
    render(){
        let statisticsItems = [];
        for (let i = 0; i < this.props.statistics.length; i++) {
            statisticsItems.push(<StatisticsItem count={this.props.statistics[i].count} title={this.props.statistics[i].title} />);
        }
        return <div className="profile_info_stat">{statisticsItems}</div>;
    }
}

const putStateToProps = store => {
    return {
        statistics: store.statistics
    }
}

export default connect(putStateToProps)(Statistics)