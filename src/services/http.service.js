import axios from 'axios';
import {BASE_URL} from '../configs/variables.config'
import { LOGIN } from '../configs/urls.config';
import {ACCESS_TOKEN,CheckUserExpired} from '../utils/functions.utils'
class HttpService{
    constructor(){
        CheckUserExpired();
        axios.defaults.baseURL = BASE_URL
        axios.interceptors.request.use((config)=>{
            let token = localStorage.getItem(ACCESS_TOKEN);
            if (config.url !== LOGIN && token) {
                config.headers['token'] = `${token}`
            }
            return config;
        } , (error)=>{
            return Promise.reject(error);
        });
        axios.interceptors.response.use((response)=>{
            return response;
                } , (error)=>{
                    if (!error.response) return Promise.reject(error);
                    if (error.response.status === 401) {
                        // localStorage.setItem(IS_LOGGED_IN, false.toString());
                        // localStorage.removeItem(IS_LOGGED_IN);
                        // history.push(PATHS.LOGIN);
                    }
                    return Promise.reject(error);

                })

    }
    
    get(url, config) {
        return axios.get(url, config);
    }
  
    post(url, data, config) {
        return axios.post(url, data, config);
    }
  
    put(url, data, config) {
        return axios.put(url, data, config);
    }
  
    patch(url, data, config) {
        return axios.patch(url, data, config);
    }
  
    delete(url, config) {
        return axios.delete(url, config);
    }
}

export default new HttpService();