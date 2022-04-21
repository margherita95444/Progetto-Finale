import React from "react";
import { getPosts } from '../../functions/posts';
import Post from '../post/Post'

export default class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        getPosts().then(posts => this.setState({posts}));    
    }

    render() {
        console.log(this.state.posts)
        const card = this.state.posts.map(post => <Post post={post} key={post.id}/>);

        return (
            <div className="row">
                <img className="col-6 imgMuffin" src="./assets/images/muffin.png" alt="" />
                <div className="col-6">{ card } </div>
            </div>
        );
    }
}
 