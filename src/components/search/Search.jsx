import React from 'react';
import ContentInput from "../profile/ContentInput";
import './search.css'
import Friend from "../friends/Friend";

class Search extends React.Component{
    render(){
        return(
            <div className="search">
                <h1>Поиск</h1>
                <div className="search__input">
                    <ContentInput placeholder="Кого будем искать?"/>
                </div>
                <Friend isFriend="1" name="Павел Облаков"/>
                <Friend isFriend="0" name="Алексей Грицанов"/>
            </div>
        );
    }
}

export default Search;