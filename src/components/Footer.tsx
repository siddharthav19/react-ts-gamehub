import { HStack, Show, Text } from "@chakra-ui/react";
import { SiLeetcode, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <HStack justifyContent={"center"} margin="10px" gap={"30px"}>
      <HStack gap={"0"}>
        <Text color={"gainsboro"} fontWeight="bold">
          stidd
        </Text>
        <MdCopyright />
      </HStack>
      <HStack justifyContent={"space-around"} spacing="10px">
        <Show above="md">
          <Text color={"gray.500"}>You can find me on</Text>
        </Show>

        <a href="https://leetcode.com/siddhartha011" target={"_blank"}>
          <SiLeetcode cursor={"pointer"} />
        </a>
        <a href="https://github.com/siddharthav19" target={"_blank"}>
          <SiGithub />
        </a>
        <SiLinkedin />
      </HStack>
    </HStack>
  );
};

export default Footer;
