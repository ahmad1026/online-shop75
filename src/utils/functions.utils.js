import { ACCESS_TOKEN , REFRESH_TOKEN , IS_LOGGED_IN } from "../configs/variables.config";
import jwt_decode from "jwt-decode";
import {history} from '../services/history.service'



export const CheckUserExpired = () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) return;
    const { exp } = jwt_decode(token);
    console.log(exp);
    if (exp * 1000 < Date.now()) {
        localStorage.removeItem('userData');
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        localStorage.removeItem(IS_LOGGED_IN);
        history.push('/login')
    }
}
export const useAuth = () => 
{
    if(localStorage.hasOwnProperty('IS_LOGGED_IN') && localStorage.getItem('IS_LOGGED_IN') !== "false")
    {
        return true;
    } else {
        return false;
    }
}


export const timestampTodate = (timstamp)=>{

    let date = new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(timstamp);
  
      return date;
}