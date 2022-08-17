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
export const deleteProduct = async (id)=>{

    try{
        const response = http.delete(GET_PRODUCTS +"/"+ id);
         return (await response).data

    }catch(e){
        console.log(e)

    }
}
export const editProduct = async (id, data)=>{

    try{
        const response = http.patch(GET_PRODUCTS +"/"+ id,data);
         return (await response).data

    }catch(e){
        console.log(e)

    }
}