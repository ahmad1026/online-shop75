import axios from 'axios';
import {BASE_URL} from '../configs/variables.config'
import {CheckUserExpired} from '../utils/functions.utils'
class HttpService{
    constructor(){
        CheckUserExpired();
        axios.defaults.baseURL = BASE_URL
        axios.interceptors.request.use((config)=>{

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