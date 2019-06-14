import React from 'react';
import Input from "../profile/input";
import '../css/search.css'
import Friend from "../friends/friend";

class Search extends React.Component{
    render(){
        return(
            <div className="main__search">
                <h1>Поиск</h1>
                <div className="main__search__input">
                    <Input placeholder="Кого будем искать?"/>
                </div>
                <Friend isFriend="1" name="Влад Никитин"/>
                <Friend isFriend="0" name="Мария Ким"/>
            </div>
        );
    }
}

export default Search;