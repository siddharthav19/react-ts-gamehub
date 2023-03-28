import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
            <Text cursor={"pointer"} fontSize="lg">
              {e.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
