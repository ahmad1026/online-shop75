import http from '../services/http.service'
import { GET_PRODUCTS } from '../configs/urls.config'

export const addProduct = async (form)=>{

    try{
        const response = http.post(GET_PRODUCTS , form);
         return (await response).data

    }catch(e){
        console.log(e)

    }
}

