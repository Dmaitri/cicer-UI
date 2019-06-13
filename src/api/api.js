import axios from 'axios';

const API_URL = 'https://172.19.101.120:3333/data';

export function get(dispatch, type, url) {
    return axios.get(API_URL + url)
        .then(response => {
            dispatch({
                type: type,
                payload: response.data
            });
            return response.data
        }).catch(err => {
            console.log(err);
        })
}

export function post(url, data) {
    return axios.post(API_URL + url, data)
        .then(response => {

        }).catch(err => {
            console.log(err);
        })
}

export function patch(url, data) {
    return axios.patch(API_URL + url, data)
        .then(response => {

        }).catch(err => {
            console.log(err);
        })
}

export function put(url, data) {
    return axios.put(API_URL + url, data)
        .then(response => {

        }).catch(err => {
            console.log(err);
        })
}