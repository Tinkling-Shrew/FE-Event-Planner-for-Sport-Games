import axios from "axios";

const api = axios.create({
    baseURL: "http://kowalski7.go.ro:30000/api",
});

export default api;
