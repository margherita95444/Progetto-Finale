import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostsCategories } from "../../functions/PostsCategories";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [postsCategories, setpostsCategories] = useState([]);
    const {categoryId} = useParams();

    if(!hasLoaded){
        getPostsCategories(categoryId).then(postsCategories => {
            setpostsCategories(postsCategories);
            setHasLoaded(true);
        });
    }
    
    //console.log(postsCategory)
    
    return (
        <nav className="navbar navbar-expand-lg shadow-lg ">
            <div className="container-fluid"> 
                <Link className="navbar-brand text-dark" to="/">BLOG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            postsCategories.map(postsCategory => (
                                <li key={postsCategory.id} className="nav-link text-dark">
                                    <Link className="nav-link text-dark" to={`posts-categories/${postsCategory.id}/posts`}>{postsCategory.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}