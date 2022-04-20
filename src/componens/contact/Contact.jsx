import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPageContact } from '../../functions/pages';

// export default function Contact() {
//     const [hasLoaded, setHasLoaded] = useState(false);
//     const [page, setPage] = useState([]);
//     const {pageId} = useParams();

//     if(!hasLoaded){
//         getPages(pageId).then(page => {
//             setPage(page);
//             setHasLoaded(true);
//         });
//     }

//     return (
            
//         <div>
//             {page.id}
//         </div>
//     );
// }
 

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageContact: []
        };
    }

    componentDidMount() {
        getPageContact().then(pageContact => this.setState({pageContact}));    
    }

    render() {
        console.log(this.state.pageContact)

        return (
            <div>
                <h1 className="mt-5 text-center">{this.state.pageContact.title}</h1>
                <p className="text-center mt-5" dangerouslySetInnerHTML={{ __html: this.state.pageContact.content }}></p>
            </div>
        );
    }
}