import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://johnny-e0va.onrender.com/api/send',
    withCredentials: true,
});
