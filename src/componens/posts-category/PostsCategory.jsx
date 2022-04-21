import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostsCategory } from '../../functions/PostsCategory';
import Post from '../post/Post';

export default function PostsCategory(props) {
    const [postsCategory, setpostsCategory] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        getPostsCategory(categoryId).then(postsCategory => setpostsCategory(postsCategory));
    }, [categoryId]);
    
    //console.log(postsCategory)
    const rows = postsCategory.map(post => <Post post={post} key={post.id}/>);
    postsCategory.map(post => console.log(post.id));
    return (
        <div className="mt-5">
            {rows}    
        </div>
    );
}