import { Post } from "../models/Post"

export const getPost = (postId) => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/posts/${postId}`)
        .then(resp => resp.json())
        .then(post => postObjToModel(post));
};

export const postObjToModel = post => new Post(post.id, post.title.rendered, post.content.rendered, post.date, post.modified, post.categories, post.author);