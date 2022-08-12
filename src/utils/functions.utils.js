import { jsonwebtoken as jwt} from 'jsonwebtoken'
import { ACCESS_TOKEN, AUTH_JWT_SECRET ,  IS_LOGGED_IN, REFRESH_TOKEN } from "configs/variables.config";


export const CheckUserExpired = (pageStatus)=>{

    const token = localStorage.getItem(ACCESS_TOKEN)
    if(!token) return;
    const { exp } = jwt.vetify(token ,AUTH_JWT_SECRET);
    
    if(exp *1000 <Date.now()){
        
    }


}