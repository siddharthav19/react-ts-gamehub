import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
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
        spacing={"3"}
        padding="3"
      >
        {isLoading &&
          skeletons.map((e) => (
            <GameCardContainer key={e}>
              <GameCardSkeleton key={e} />
            </GameCardContainer>
          ))}

        {games.map((e) => (
          <GameCardContainer key={e.name}>
            <GameCard key={e.name} game={e} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
