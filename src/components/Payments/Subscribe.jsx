import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../config/constants";
import { buySubscription } from "../../redux/thunks/user";
import toast from "react-hot-toast";
import { clearError } from "../../redux/reducers/subscriptionReducer";
import logo from "../../assets/images/logo.jpg";
import { clearError as courseClearError } from "../../redux/reducers/courseReducer";

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const { loading, error, subscriptionId } = useSelector(
    (state) => state.subscription
  );

  const { error: courseError } = useSelector((state) => state.courses);

  const subscribeHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/api/v1/razorpaykey`);
    setKey(key);

    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (courseError) {
      toast.error(courseError);
      dispatch(courseClearError());
    }

    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: "Course App",
          description: "Get access to all premium content",
          image: logo,
          subscription_id: subscriptionId.subscriptionId,
          callback_url: `${server}/api/v1/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: "",
          },
          notes: {
            address: "anonymous",
          },
          theme: {
            color: "#FFC800",
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    error,
    dispatch,
    user.name,
    user.email,
    key,
    subscriptionId,
    courseError,
  ]);

  return (
    <Container h="90vh" p="16">
      <Heading children="Welcome" my="8" textAlign={"center"} />
      <VStack
        boxShadow={"lg"}
        alignItems="stretch"
        borderRadius={"lg"}
        spacing="0"
      >
        <Box bg="yellow.400" p={"4"} css={{ borderRadius: "8px 8px 0 0" }}>
          <Text color={"black"} children={`Pro Pack - ₹699`} />
        </Box>

        <Box p="4">
          <VStack textAlign={"center"} px="8" mt={"4"} spacing="8">
            <Text children={`Join pro pack and get access to all content.`} />
            <Heading size="md" children={"₹699 Only"} />
          </VStack>
          <Button
            my="8"
            w="full"
            colorScheme={"yellow"}
            onClick={subscribeHandler}
            isLoading={loading}
          >
            Buy Now
          </Button>
        </Box>

        <Box bg="blackAlpha.600" p="4" css={{ borderRadius: "0 0 8px 8px" }}>
          <Heading
            size="sm"
            children={"100% Refund at cancellation"}
            color={"white"}
            textTransform="uppercase"
          />
          <Text
            fontSize={"xs"}
            color="white"
            children={"*Terms & Conditions Apply"}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
