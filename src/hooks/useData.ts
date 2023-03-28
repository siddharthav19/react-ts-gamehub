import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";


interface FetchResponse<T>{
     count:number;
     results:T[]
}


function useData<T>(endpoint:string){
     const [data,setData] = useState<T[]>([]);
     const [error,setError] = useState<string>('');
     const [isLoading,setLoading] = useState<boolean>(false);
     useEffect(() => {
     const controller = new AbortController();
     setLoading(true);
       apiClient.get<FetchResponse<T>>(endpoint,{
          signal:controller.signal
       }).then(({data})=>{
          setData(data.results);
          setLoading(false);
       }).catch(err=>{
          if(err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
       })
       return () => controller.abort();
     }, [])
     return {data,error,isLoading};
}
export default useData;