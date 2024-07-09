import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/thunks/profile";
import toast from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/profileReducer";
import { loadUser } from "../../redux/thunks/user";
import { useNavigate } from "react-router-dom";

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.profile);

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile({ name, email }));
    dispatch(loadUser());
    navigate("/profile");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  return (
    <Container py={"16"} minH={"90vh"}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={"uppercase"}
          children="Update Profile"
          my="16"
          textAlign={["center", "left"]}
        />
        <VStack spacing={"8"}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type={"text"}
            focusBorderColor="yellow.500"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type={"email"}
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            w="full"
            colorScheme="yellow"
            type="submit"
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
