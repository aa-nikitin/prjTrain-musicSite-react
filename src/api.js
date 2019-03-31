import axios from 'axios';
const BASE_PATH = '/api';

const prodQuery = query => {
    const formData = new FormData();
    formData.append('file', query.image);
    formData.append('name', query.name);
    formData.append('price', query.price);
    return axios
        .post(`${BASE_PATH}/newProduct`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => response.data);
};

const updateCounters = query => {
    return axios
        .put(`${BASE_PATH}/updateCounters`, {
            arrCounts: query
        })
        .then(response => response.data)
        .catch(error => error);
};

const getQuery = path => {
    return axios
        .get(`${BASE_PATH}/${path}`)
        .then(response => response)
        .catch(error => error);
};

const postQuery = (query, path) => {
    return axios
        .post(`${BASE_PATH}/${path}`, query)
        .then(response => response.data)
        .catch(error => error);
};

export { prodQuery, updateCounters, getQuery, postQuery };
