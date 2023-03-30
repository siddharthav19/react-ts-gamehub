import { HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`, //lg for devices whose screen is larger than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "210px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack bg={"teal"} spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            handlePlatformSelection={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
