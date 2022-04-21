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
        <nav className="navbar navbar-expand-lg shadow-lg sticky-top">
            <div className="container-fluid"> 
                <Link className="navbar-brand" to="/"><img src="./assets/images/candy.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            postsCategories.map(postsCategory => (
                                <li key={postsCategory.id} className="nav-link">
                                    <Link className="nav-link" to={`posts-categories/${postsCategory.id}/posts`}>{postsCategory.name.toUpperCase()}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <Link className="nav-link" to="/contact/39">Contact</Link>
                    <Link className="nav-link" to="/about-us/37">About Us</Link>
                </div>
            </div>
        </nav>
    );
}