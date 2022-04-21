import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mt-5 mx-5">
                <div >
                    <h1>{this.props.post.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: this.props.post.content }}></p>
                    <p>{this.props.post.created_at}</p>
                    <p>{this.props.post.author}</p>
                </div>
                <Link className="btn" to={ `/posts/${this.props.post.id}`} >Details</Link>
            </div>
        );
    }
}