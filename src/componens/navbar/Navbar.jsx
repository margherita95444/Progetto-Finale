import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostsCategories } from "../../functions/PostsCategories";
import { getPages } from '../../functions/pages';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [postsCategories, setpostsCategories] = useState([]);
    const [pages, setPages] = useState([]);
    const {categoryId} = useParams();
    const {pageId} = useParams();

    if(!hasLoaded){
        getPostsCategories(categoryId).then(postsCategories => {
            setpostsCategories(postsCategories);
            setHasLoaded(true);
        });
    }

    if(!hasLoaded){
        getPages(pageId).then(pages => {
            setPages(pages.slice(0, 2));
            setHasLoaded(true);
        });
    }
    
    //console.log(postsCategory)
    //console.log(pages)
    
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

                    {
                        pages.map(page => (
                            <li key={page.id} className="nav-link">
                                <Link className="nav-link fs-5" to={`pages/${page.id}`}>{page.title}</Link>
                            </li>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}