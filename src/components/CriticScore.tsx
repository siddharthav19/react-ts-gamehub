import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const tagColor = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      fontSize="15px"
      borderRadius="5px"
      paddingX={2}
      cursor={"pointer"}
      colorScheme={tagColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
