import axios from 'axios';

// Default config for Axios

export default axios.create(
    {
    baseURL: 'https://api.chucknorris.io/jokes',
    responseType: 'json',
    timeout: 6000
    }
)