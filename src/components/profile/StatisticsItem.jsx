import React from 'react';

class StatisticsItem extends React.Component{
    constructor(props){
        super(props);
        this.count = props.count;
        this.title = props.title;
    }
    render(){
        return(
            <h2>
                <span>{this.count}</span>
                <br/>
                {this.title}
            </h2>
        );
    }
}
export default StatisticsItem;