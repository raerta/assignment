import axios from "axios";
import { API_BASE_URL } from "@/const/endpoints";
import { token } from "@/const/env";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});


axiosInstance.interceptors.request.use(
    (config: any) => {
        //import token from local storage
        const authToken = token;
        //configuring header
        config.headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        };

        return config;
    },
    (error) => Promise.reject(error),
);

const api = axiosInstance;


export default api