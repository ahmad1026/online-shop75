import http from "../services/http.service";
import { GET_CATEGORES } from '../configs/urls.config'

export const getCategores = async ()=>{

    try{
        const response = http.get(GET_CATEGORES);
         return (await response).data

    }catch(e){
        console.log(e)

    }



}