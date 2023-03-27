import { useEffect, useState } from "react";
import apiClient,{CanceledError} from "../services/api-client";


export interface Platform{
  id:number;
  name:string;
  slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image:string
  parent_platforms:{platform:Platform}[];
  metacritic:number;
}

export interface rawgGamesResponse {
  count: number;
  results: Game[];
}



function useGames() {
  const [isLoading,setLoading] = useState<boolean>(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<rawgGamesResponse>("/games",{
        signal:controller.signal
      })
      .then(({ data: { results } }) => {
        setGames(results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError)
        return ;
        setError(err.message);
        setLoading(false);
      });
      return ()=>controller.abort();
  },[]);

  return {games,error,isLoading};
}

export default useGames;