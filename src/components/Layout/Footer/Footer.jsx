import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { DiGithub } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.900" minH={"10vh"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Heading children="All Rights Reserved" color={"white"} />
          <Heading
            fontFamily={"body"}
            size="sm"
            children="@Tushar"
            color={"YELLOW.400"}
          />
        </VStack>
        <HStack
          spacing={["2", "10"]}
          justifyContent="center"
          color={"white"}
          fontSize={"50"}
        >
          <a href="https://github.com/TusharMishra1811" target={"blank"}>
            <DiGithub />
          </a>
          <a href="https://www.linkedin.com/in/tushar8/" target={"blank"}>
            <FaLinkedin />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
