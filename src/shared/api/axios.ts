import axios from 'axios';
import { toast } from 'react-hot-toast';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL!,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response)=> response,
    (error) => {
        console.error('API Error:', error);
        toast.error('An error occurred while fetching data. Please try again later.');
        return Promise.reject(error);
    }
)

export default axiosInstance;