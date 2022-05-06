import axios from "axios";

// const BASE_URL = "http://kowalski7.go.ro:30000/api";
const BASE_URL = "http://localhost:3001/api";

export default axios.create({
    baseURL: BASE_URL,
});
