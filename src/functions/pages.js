
import { Page } from "../models/Page"

export const getPages = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/pages`)
        .then(resp => resp.json())
        .then(pages => pages.map(page => pageObjToModel(page)));     
};

export const getPage = (pageId) => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/pages/${pageId}`)
    .then(resp => resp.json())
    .then(page => pageObjToModel(page));
};

export const pageObjToModel = page => new Page(page.id, page.title.rendered, page.content.rendered);




