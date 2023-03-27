import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }}
        spacing={"5"}
        padding="10"
      >
        {games.map((e) => (
          <GameCard key={e.id} game={e} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
