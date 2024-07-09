import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import introVideo from "../../assets/videos/intro.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import termsAndConditions from "../../assets/docs/termsAndConditions.js";
import aboutImage from "../../assets/images/Tushar.jpeg";

const Founder = () => (
  <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"}>
    <VStack>
      <Avatar boxSize={["40", "48"]} src={aboutImage} />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
      <Heading children="Tushar Mishra" size={["md", "xl"]} />
      <Text
        textAlign={["center", "left"]}
        children={`Hi, I am a full-stack developer.
            Our mission is to provide quality content at reasonable price`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndConditions }) => (
  <Box>
    <Heading
      size={"md"}
      children="Terms & Conditions"
      textAlign={["center", "left"]}
      my={"4"}
    />
    <Box h="sm" p="4" overflowY={"scroll"}>
      <Text
        textAlign={["center", "left"]}
        letterSpacing={"widest"}
        fontFamily={"heading"}
      >
        {termsAndConditions}
      </Text>
      <Heading
        my="4"
        size={"xs"}
        children="Refund is only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
      <Heading children="About Us" textAlign={["center", "left"]} />
      <Founder />
      <Stack m="8" direction={["column", "row"]} alignItems="center">
        <Text fontFamily={"cursive"} m="8" textAlign={["center", "left"]}>
          We are a video streming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={"ghost"} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndConditions={termsAndConditions} />
      <HStack my="4" p={"4"}>
        <RiSecurePaymentFill />
        <Heading
          size={"xs"}
          fontFamily="sans-serif"
          textTransform={"uppercase"}
          children={"Payment is secured by Razorpay"}
        />
      </HStack>
    </Container>
  );
};

export default About;
