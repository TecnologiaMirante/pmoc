import axios from "axios";

const api = axios.create(
    {
        baseURL:'http://192.168.6.20:8080'
    }
)

export default api;