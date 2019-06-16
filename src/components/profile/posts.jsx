import React from 'react';
import {connect} from "react-redux";
import Post from "./post";

class Posts extends React.Component {
    render(){
        let posts = [];
        for (let i = 0; i < this.props.posts.length; i++) {
            posts.push(<Post name={this.props.posts[i].name} content={this.props.posts[i].content} datetime={this.props.posts[i].datetime} />);
        }
        return <div className="posts">{posts}</div>;
    }
}

const putStateToProps = store => {
    return {
        posts: store.posts
    }
}

export default connect(putStateToProps)(Posts);