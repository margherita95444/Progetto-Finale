import { useParams } from "react-router-dom";
import {React, useState, useEffect} from "react";
import { getPost } from "../../functions/post";
import { getMedia } from "../../functions/media";
import { Link } from "react-router-dom";
import {RiCake3Line} from "react-icons/ri";

export default function PostDetail () {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [post, setPost] = useState({});
    const [media, setMedia] = useState([]);

    const { postId } = useParams();

    if (!hasLoaded) {
        getPost(postId).then(post => setPost(post));
        setHasLoaded(true);
    }
    
    if (!hasLoaded) {
        getMedia().then(media => setMedia(media));
        setHasLoaded(true);
    }

    const medianew =[media.id = post.mediaId, media.link = `http://wordpress.test/app/uploads/2022/04/${post.slug}.png`]
    console.log(medianew)
    
    return (
        <div className="row justify-content-center mb-5" >
            <img className="imgDetail" src={media.link}/> 
            <div className="col text-start mt-5 postDetail">
                <h1>{post.title}</h1> 
                
                <p dangerouslySetInnerHTML={{ __html:post.content }}></p>
                <div className="row">
                    <div className="col-6">
                        <p className="mt-5">
                            <strong>Created at: </strong>
                            <span>{post.created_at} </span>
                        </p>
                        <p>
                            <strong>Updated at:  </strong>
                            <span>{post.updated_at}</span>
                        </p> 
                    </div>
                    <div className="col-6 d-flex"><Link className="text-white text-decoration-none back" to={"/"} > <span className="backdot">...</span><RiCake3Line className="btnMuffin"/></Link> </div>
                </div>
            </div> 
        </div>         
    )
}

