import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  //List chakra -> ul
  //ListItem chakra -> li

  if (error) return null;

  return isLoading ? (
    <Spinner size="xl" />
  ) : (
    <List>
      {data.map((e) => (
        <ListItem key={e.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(e.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontWeight={e.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(e)}
              fontSize="lg"
            >
              {e.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
