import axios from "axios" 
const baseURL = "https://dummyjson.com"
export function logIn(data){
    /*axios
       .post('${baseURL}/auth/login',data)
       .then((res) =>{
        console.log(res)
        return res;
       })
       .catch((err) =>{
        console.log(err)
        return err;
       })*/
       return axios.post('${baseURL}/auth/login',data)

}
//'https://dummyjson.com/auth/login'