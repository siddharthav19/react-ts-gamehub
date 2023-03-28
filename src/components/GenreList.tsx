import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
