
import { Page } from "../models/Page"

export const getPages = (pageId) => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/pages`)
        .then(resp => resp.json())
        .then(page => pageObjToModel(page));     
};

export const getPageContact = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/pages/39`)
        .then(resp => resp.json())
        .then(page => pageObjToModel(page));    
};

export const getPageAboutUs = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/pages/37`)
        .then(resp => resp.json())
        .then(page => pageObjToModel(page));     
};

export const pageObjToModel = page => new Page(page.id, page.title.rendered, page.content.rendered);




