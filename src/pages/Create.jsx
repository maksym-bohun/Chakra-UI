import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px" ml="30px">
      <Form>
        <FormControl isRequired mb="40px">
          <FormLabel>Task name</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed decription for the task..."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox colorScheme="purple" name="isPriority" size="lg" />
          <FormLabel mb={0} ml="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}
