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
            <div >
                { card } 
            </div>
        );
    }
}
 