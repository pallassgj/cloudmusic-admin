import axios from 'axios';

const baseURL = import.meta.env.VITE_API_HOST

const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000
})

const { get, post, put } = instance

export { get, post, put }