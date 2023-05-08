import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
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
    <>
      <Heading fontSize={"2xl"} marginBottom="3">
        Genres
      </Heading>
      <List>
        {data.map((e) => (
          <ListItem key={e.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(e.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={e.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                whiteSpace={"normal"}
                textAlign="left"
                onClick={() => onSelectGenre(e)}
                fontSize="lg"
              >
                {/* {e.name.length < 16 ? e.name : e.name.slice(0, 16)} */}
                {e.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
