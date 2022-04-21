import React from 'react';
import { getPageAboutUs } from '../../functions/pages';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageAboutUs: []
        };
    }

    componentDidMount() {
        getPageAboutUs().then(pageAboutUs => this.setState({pageAboutUs}));    
    }

    render() {
        console.log(this.state.pageAboutUs)

        return (
            <div className='container'>
                <p className='row justify-content-center'>
                    <h1 className="mt-5 text-center">{this.state.pageAboutUs.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: this.state.pageAboutUs.content }}></p>
                </p>
            </div>
        );
    }
}