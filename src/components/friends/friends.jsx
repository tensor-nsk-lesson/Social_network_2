import React from 'react'
import '../css/friends.css'
import Friend from "./friend";

class Friends extends React.Component {
    render() {
        return (
            <div>
                <h1>Друзья</h1>
                <div className="main__friends">
                    <Friend isFriend="1" name="Влад Никитин"/>
                </div>
            </div>
        );
    }
}

export default Friends;