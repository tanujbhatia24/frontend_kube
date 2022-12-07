import React from "react";
import { getProfileData } from "../api";
import {
  Card,
  //   CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export const BoxOne = () => {
  const [data, SetData] = React.useState([]);
  React.useEffect(() => {
    getProfileData().then((res) => SetData(res.data));
  }, []);
  const { name, course, linkdin, github, url, email, mobile } = data;
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={url}
          alt={name}
          padding="15px"
        />

        <Stack>
          <CardBody>
            <Heading size="md" float="left">
              {name}
            </Heading>
            <br />
            <Text float="left" py="2">
              Email: {email}
            </Text>
            <br />
            <Text float="left" py="2">
              Linkdin: {linkdin}
            </Text>
            <br />
            <Text float="left" py="2">
              Github: {github}
            </Text>
            <br />
            <Text float="left" py="2">
              mobile: {mobile}
            </Text>
          </CardBody>

          <CardFooter
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" fontWeight="500">
              Course: <span style={{ color: "red" }}>{course}</span>
            </Text>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};
