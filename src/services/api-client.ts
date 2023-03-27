import axios,{CanceledError} from "axios";

const apiClient = axios.create({
     baseURL:'https://api.rawg.io/api',
     params:{
          key:'9d08f56532b144039f75044c90b2304c'
     }   
})

export {CanceledError};

export default apiClient;