import axios from 'axios';

const api = axios.create({
    baseHRL: 'http:mongodb://localhost:27017/nodeapi'
});

export default api;
