import http from '../services/http.service'
import { GET_ORDERS } from '../configs/urls.config'


export const getOrders = async (url)=>{

    try{
        const response = http.get(GET_ORDERS + url);
         return (await response).data

    }catch(e){
        console.log(e)

    }



}
export const getOrdersFilter = async (filter)=>{

    try{
        const response = http.get(GET_ORDERS + `?status=${filter}`);
         return (await response).data

    }catch(e){
        console.log(e)

    }



}