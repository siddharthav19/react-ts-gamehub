import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  return (
    <ul>
     {
          genres.map(e=><li key={e.id}>{e.name}</li>)
     }
    </ul>
  );
};

export default GenreList;
