import { LOGIN_URL } from '../configs/urls.config';
import { ACCESS_TOKEN , REFRESH_TOKEN , IS_LOGGED_IN } from '../configs/variables.config';
import http from '../services/http.service'
import jwt_decode from "jwt-decode";


export async function Login(data){
    try{
        const response = await http.post(LOGIN_URL ,data)
        localStorage.setItem(ACCESS_TOKEN, response.data.token);
        localStorage.setItem(IS_LOGGED_IN, true.toString());

        const realData = jwt_decode(response.data.token);
        realData.loggedIn = true;
        realData.token = response.data.token;

        localStorage.setItem('userData', JSON.stringify(realData));


        return realData

    }catch(err){

        return Promise.reject(err)
    }
}