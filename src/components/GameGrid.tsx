import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
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
        {isLoading && skeletons.map((e, i) => <GameCardSkeleton key={i} />)}

        {games.map((e) => (
          <GameCard key={e.id} game={e} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
