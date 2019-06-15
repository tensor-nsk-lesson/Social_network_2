import React from 'react';
import StatisticsItem from "./statisticsItem";

class Statistics extends React.Component{
    render(){
        return(
            <div className="main__profile-information__statistics">
                <StatisticsItem count="24" name="друга"/>
                <StatisticsItem count="12" name="фотографий"/>
                <StatisticsItem count="1" name="пост"/>
                <StatisticsItem count="33" name="подписки"/>
            </div>
        );
    }
}

export default Statistics;