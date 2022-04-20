import { useParams } from "react-router-dom";
import {useState, React } from "react";
import { getPost } from "../../functions/post";

export default function Movie (props) {
    const [hasLoadedUser, setHasLoadedUser] = useState(false);
    const [post, setPost] = useState({});
    const { postId } = useParams();

    if (!hasLoadedUser) {
        getPost(postId).then(post => setPost(post));
        setHasLoadedUser(true);
    }

    return (
       
            <div className="col-4">
                 <p>{post.title}</p> 
                 <p dangerouslySetInnerHTML={{ __html:post.content }}></p>
                 <p>{post.created_at}</p> 
                 <p>{post.updated_at}</p> 
                 <p>{post.author}</p> 
                 <p>
                 </p>
            </div>      
             
    )
}

