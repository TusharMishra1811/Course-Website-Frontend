import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/thunks/profile";
import toast from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/profileReducer";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.profile);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changePassword({ oldPassword, newPassword }));
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
          children="Change Password"
          my="16"
          textAlign={["center", "left"]}
        />
        <VStack spacing={"8"}>
          <Input
            required
            id="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter old password"
            type={"password"}
            focusBorderColor="yellow.500"
          />
          <Input
            required
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter New password"
            type={"password"}
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

export default ChangePassword;
