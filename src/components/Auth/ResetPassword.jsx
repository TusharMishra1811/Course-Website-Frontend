import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../redux/thunks/profile";
import toast from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/profileReducer";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams();
  const token = params.token;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.profile);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ token, password }));
    navigate("/login");
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
    <Container py={"16"} h={"90vh"}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Reset Password"
          my={16}
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        />
        <VStack spacing={"8"}>
          <Input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            type={"password"}
            focusBorderColor="yellow.500"
          />

          <Button
            isLoading={loading}
            type="submit"
            w={"full"}
            colorScheme="yellow"
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
