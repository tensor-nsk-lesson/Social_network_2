import React from 'react';
import '../css/dialogs.css'
import Friend from "../friends/friend";

class Dialogs extends React.Component{
    render(){
        return(
            <div className="dialog">
                <h1>Диалог с Владом Никитиным</h1>
                <div className="dialog__items">
                    <div className="dialog__items__list">
                    </div>
                    <div className="dialog__items__messages">

                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs;