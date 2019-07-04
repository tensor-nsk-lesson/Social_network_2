import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <div className="post__info">
                    <div className="post__header">
                        <a className="post__author" href="#">
                            {this.props.name}
                        </a>
                        <p className="post__datetime">{this.props.datetime}</p>
                    </div>
                    <div className="post__content">{this.props.content}</div>
                </div>
            </div>
        );
        // return(
        //     <div className="post">
        //         <div className="post__info">
        //             <div className="post__img"></div>
        //             <div className="post__header">
        //                 <a className="post__author" href="#">
        //                     {this.props.name}
        //                 </a>
        //                 <div className="post__content">{this.props.content}</div>
        //             </div>
        //             <p className="post__datetime">{this.props.datetime}</p>
        //         </div>
        //     </div>
        // );
    }
}

export default Post;