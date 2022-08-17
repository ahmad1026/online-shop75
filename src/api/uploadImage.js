import http from '../services/http.service'
import { UPLOAD_IMAGE } from '../configs/urls.config'

export const uploadImage = async (image)=>{

    try{
        const response = http.post(UPLOAD_IMAGE , image);
         return (await response).data

    }catch(e){
        console.log(e)

    }
}

