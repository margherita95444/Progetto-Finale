import {React, useState} from "react";
import { getPosts } from "../../functions/posts";
import Post from '../post/Post'

export default function PostDetail () {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    if (!hasLoaded) {
        getPosts().then(posts => setPosts(posts));
        setHasLoaded(true);
    }

    //console.log(posts)

    const card = posts.map(post => <Post post={post} key={post.id}/>);

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                { card } 
            </div>
        </div>
    );
}

 