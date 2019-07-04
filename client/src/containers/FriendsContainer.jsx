import React from 'react'
import '../components/friends/friends.css'
import Friend from "../components/friends/Friend";
import {connect} from "react-redux";
import {mapFriendsToStore} from "../actions/profileActions";

const friends_data = [
    {
        name: 'Антон Чусовитин'
    },
    {
        name: 'Яна Казанина'
    },
];

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.mapFriendsToStore(friends_data)
    }

    render() {
        let friends = [];
        for (let i = 0; i < this.props.friends.length; i++) {
            friends.push(<Friend isFriend="1" name={this.props.friends[i].name}/>);
        }
        return <div className="friends"><h1>Друзья</h1>{friends}</div>;
    }
}

const mapStateToProps = state => {
    return {
        friends: state.profile.friends
    }
};

const mapDispatchToProps = {
    mapFriendsToStore
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);