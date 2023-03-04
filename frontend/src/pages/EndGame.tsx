import { Text, Image, Button, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
const EndGame = () => {
  const [count, setCount] = useState(0);
  return (
    <Box h="100vh" bg="#282C34" border={"2px solid orange"}>
      <Text
        mt="2rem"
        color="#fff"
        fontSize={{ base: "2rem", md: "2.5rem", lg: "3.6rem" }}
        fontWeight="bold"
      >
        Game Over 🥱
      </Text>
      <Text
        mt="2rem"
        color="#fff"
        fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}
        fontWeight="600"
      >
        Final Score = {count}
      </Text>
      <br />
      <Flex justifyContent="center">
        <Image
          boxSize="150px"
          src="https://fcit.usf.edu/matrix/wp-content/uploads/2017/01/DanceBot-3-LG.gif"
          alt="Dan Abramov"
        />
      </Flex>

      <Button
        mt="2rem"
        _hover={{
          backgroundColor: "teal.200",
          color: "black"
        }}
        color="white"
        rightIcon={<RepeatIcon />}
        bg="teal.300"
      >
        Play Again
      </Button>

      <Text
        mt="5rem"
        color="#fff"
        fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2rem" }}
        fontWeight="600"
      >
        ThankYou for Visiting...
      </Text>
    </Box>
  );
};

export default EndGame;
