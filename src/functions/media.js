import {Media} from "./../models/Media"; 

export const getMedia = () => {
    return fetch(`http://wordpress.test/wp-json/wp/v2/media`)
        .then(resp => resp.json())
        .then(media => media.map(media => mediaObjToModel(media)));
};

export const mediaObjToModel = media => new Media(media.id, media.source_url);


