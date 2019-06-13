import React from 'react';

class StatisticsItem extends React.Component{
    constructor(props){
        super(props);
        this.count = props.count;
        this.name = props.name;
    }
    render(){
        return(
            <h2>
                <span>{this.count}</span>
                <br/>
                {this.name}
            </h2>
        );
    }
}
export default StatisticsItem;