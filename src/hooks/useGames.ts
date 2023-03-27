import { useEffect, useState } from "react";
import apiClient,{CanceledError} from "../services/api-client";


export interface Game {
  id: number;
  name: string;
}

export interface rawgGamesResponse {
  count: number;
  results: Game[];
}



function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<rawgGamesResponse>("/games",{
        signal:controller.signal
      })
      .then(({ data: { results } }) => setGames(results))
      .catch((err) => {
        if (err instanceof CanceledError)
        return ;
        setError(err.message);
      });

      return ()=>controller.abort();
  },[]);

  return {games,error};
}

export default useGames;