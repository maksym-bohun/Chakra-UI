import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  const boxStyles = {
    w: "150px",
    h: "50px",
  };

  return (
    <Flex as="nav" p="10px" align="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>

        <Text>maks@gmail.com</Text>
        <Button colorScheme="purple">Log out</Button>
      </HStack>
    </Flex>

    // <Flex
    //   bg="gray.200"
    //   flexDir="row"
    //   justify="space-between"
    //   wrap="wrap"
    //   gap={2}
    // >
    //   <Box sx={boxStyles} bg="red">
    //     1
    //   </Box>
    //   <Box sx={boxStyles} flexGrow={2} bg="blue">
    //     2
    //   </Box>
    //   <Box sx={boxStyles} flexGrow={1} bg="green">
    //     3
    //   </Box>
    //   <Box sx={boxStyles} bg="yellow">
    //     4
    //   </Box>
    // </Flex>
  );
};

export default Navbar;
