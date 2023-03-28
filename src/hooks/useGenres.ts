import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Genre{
     id:number;
     name:string
}

interface FetchGenresResponse{
     count:number;
     results:Genre[]
}


function useGenres(){
     const [genres,setGenres] = useState<Genre[]>([]);
     const [error,setError] = useState<string>('');
     const [isLoading,setLoading] = useState<boolean>(false);
     useEffect(() => {
     const controller = new AbortController();
     setLoading(true);
       apiClient.get<FetchGenresResponse>('/genres',{
          signal:controller.signal
       }).then(({data})=>{
          setGenres(data.results);
          setLoading(false);
       }).catch(err=>{
          if(err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
       })
       return () => controller.abort();
     }, [])
     return {genres,error,isLoading};
}
export default useGenres;