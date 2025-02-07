import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/thunks/course";
import toast from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/courseReducer";
import { addToPlaylist } from "../../redux/thunks/profile";
import { loadUser } from "../../redux/thunks/user";

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        maxWidth={"200px"}
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
        size={"sm"}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={"bold"}
          textTransform="uppercase"
          children={"Creator"}
        />
        <Text
          fontFamily={"body"}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={"center"}
        size={"xs"}
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size={"xs"}
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={["column", "row"]} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={"yellow"}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={"ghost"}
          colorScheme={"yellow"}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const addToPlaylistHandler = async (id) => {
    await dispatch(addToPlaylist({ id }));
    dispatch(loadUser());
  };

  const categories = [
    "Web Development",
    "Artificial Intellegence",
    "Data Structures and Algorithms",
    "Android Development",
    "Data Science",
    "Game Development",
  ];

  const { loading, message, error, courses } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    dispatch(getAllCourses({ category, keyword }));

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
      <Heading children="All Courses" m={"8"} />

      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Course..."
        type={"text"}
        focusBorderColor="yellow.500"
      />
      <HStack overflowX={"auto"} paddingY={"8"}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        {courses.length > 0 ? (
          courses.map((item) => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading opacity={0.5} mt={"4"} children="Courses Not found" />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
