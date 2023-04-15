import axios from "axios";

const BASE_URL = 'http://20.251.25.72:3001'

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{ 'Content-Type': 'application/json'},
    withCredentials: true
});