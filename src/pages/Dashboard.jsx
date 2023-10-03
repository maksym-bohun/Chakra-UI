import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="250px" p="20px">
      <Box bg="white" height="200px" border="1px solid">
        <Text color={{ base: "pink.600", md: "blue", lg: "green" }}>Hello</Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
}
