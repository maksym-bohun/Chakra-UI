import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(0.5px)",
    ":hover": {
      color: "black",
      bg: "blue.200",
    },
  };

  return (
    <Container as="main" maxW="4xl">
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text ml="30px" color="blue" fontWeight="bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio,
        voluptatibus.
      </Text>

      <Box my="30px" p="20px" bg="orange.300">
        <Text color="white">This is a box!</Text>
      </Box>

      <Box sx={boxStyles}>Hello!!</Box>
    </Container>
  );
}
