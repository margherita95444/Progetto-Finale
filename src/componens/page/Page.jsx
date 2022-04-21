import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPage } from '../../functions/pages';

export default function Page() {
    const [page, setPage] = useState({});
    const { pageId } = useParams();

    useEffect(() => {
        getPage(pageId).then(page => setPage(page));
    }, [pageId]);
    
    //console.log(page)
    
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h1 className="mt-5 text-center">{page.title}</h1>
                <p className="page" dangerouslySetInnerHTML={{ __html: page.content }}></p>
            </div>
        </div>
    );
}