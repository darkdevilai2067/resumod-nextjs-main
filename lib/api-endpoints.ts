import axios from 'axios';
export const baseUrl = 'http://127.0.0.1:8000/api/v1';
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Allow-Control-Allow-Origin'] = '*';
export const apiEndpoints = {
    getSettings: {
        method: 'GET',
        url: `/settings`,
    },
    postRequestACall: {
        method: 'POST',
        url: `do-request-call`,
    }
}
