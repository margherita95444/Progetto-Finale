import { useParams } from "react-router-dom";
import {useState, React } from "react";
import { getPost } from "../../functions/post";
import { Link } from "react-router-dom";
import {RiCake3Line} from "react-icons/ri";

export default function PostDetail () {
    const [hasLoadedUser, setHasLoadedUser] = useState(false);
    const [post, setPost] = useState({});
    const { postId } = useParams();

    if (!hasLoadedUser) {
        getPost(postId).then(post => setPost(post));
        setHasLoadedUser(true);
    }

    return (
        <div row justify-content-center >
            <div className="col mt-5 col postDetail">
                <h1>{post.title}</h1> 
                <p dangerouslySetInnerHTML={{ __html:post.content }}></p>
                <p className="row">
                    <div className="col-6">
                        <p className="mt-5">
                            <strong>Created at: </strong>
                            <span>{post.created_at} </span>
                        </p>
                        <p>
                            <strong>Updated at:        </strong>
                            <span>{post.updated_at}</span>
                        </p> 
                    </div>
                    <div className="col-6 d-flex"><Link className="text-white text-decoration-none back" to={"/"} > <span className="backdot">...</span><RiCake3Line className="btnMuffin"/></Link> </div>
                </p>
            </div> 
        </div>         
    )
}

