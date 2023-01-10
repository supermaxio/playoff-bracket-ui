import axios from 'axios';
import apiDomain from '../config/apiConfig';

export default axios.create({
    baseURL: apiDomain + "/v1"
});

export const axiosPrivate = axios.create({
    baseURL: apiDomain + "/v1",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});