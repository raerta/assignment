import axios from "axios";
import { API_BASE_URL } from "@/const/endpoints";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});


const api = axiosInstance;


export default api