import axios from 'axios';

export function createProfiles(data){
    const url_api = `https://api.backendless.com/3DF64205-BC27-11F7-FF3F-D962FB726100/544CDA37-D3EF-0D33-FF1B-4C943251C800/data/profiles`;

    return {
        type: "CREATE_PROFILE",
        payload: axios.post(url_api, data)
    }
}

export function allProfiles(){
    const url_api = `https://api.backendless.com/3DF64205-BC27-11F7-FF3F-D962FB726100/544CDA37-D3EF-0D33-FF1B-4C943251C800/data/profiles?loadRelations=highlights_id`;

    return {
        type: "ALL_PROFILES",
        payload: axios.get(url_api)
    }
}