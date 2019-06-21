import React from 'react'
import '../components/friends/friends.css'
import Friend from "../components/friends/Friend";
import {connect} from "react-redux";

class FriendsContainer extends React.Component {
    render() {
        let friends = [];
        for (let i = 0; i < this.props.friends.length; i++) {
            friends.push(<Friend isFriend="1" name={this.props.friends[i].name}/>);
        }
        return <div className="friends">{friends}</div>;
    }
}

const mapStateToProps = store => {
    return {
        friends: store.profile.friends
    }
};

export default connect(mapStateToProps)(FriendsContainer);