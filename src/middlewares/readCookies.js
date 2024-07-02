import Cookies from 'js-cookie';

const getCookie = (cookieName) => {
    try{
        return JSON.parse(Cookies.get(cookieName));
    }
    catch(err){
        return Cookies.get(cookieName);
    }
}

export default getCookie;
