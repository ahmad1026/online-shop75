import http from '../services/http.service'
import { GET_PRODUCTS } from '../configs/urls.config'


export const getProducts = async (url)=>{

    try{
        const response = http.get(GET_PRODUCTS+url);
         return (await response).data

    }catch(e){
        console.log(e)

    }
}