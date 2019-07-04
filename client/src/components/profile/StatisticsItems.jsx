import React from 'react';

class StatisticsItem extends React.Component{
    render(){
        return(
            <h2 className="statisticsItem__title">
                <span className="statisticsItem__span">{this.props.count}</span>
                <br/>
                {this.props.title}
            </h2>
        );
    }
}
export default StatisticsItem;