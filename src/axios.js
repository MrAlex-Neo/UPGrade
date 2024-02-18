import axios from "axios";

const instance = axios.create({
    baseURL: 'http://31.129.110.46:8000/api/v1'
})

instance.interceptors.request.use((config) => {
    if (window.localStorage.getItem('token') !== null) {
        config.headers.Authorization = "Bearer " + window.localStorage.getItem('token')
    }
    return config
})

export default instance;

