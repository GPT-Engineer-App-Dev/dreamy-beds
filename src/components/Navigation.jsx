import React from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box p={4}>
      <HStack spacing={4}>
        <Button as={Link} to="/" colorScheme="blue">
          Home
        </Button>
        <Button as={Link} to="/slot-machine" colorScheme="blue">
          Slot Machine
        </Button>
      </HStack>
    </Box>
  );
};

export default Navigation;
