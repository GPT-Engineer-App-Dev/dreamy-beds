import React from "react";
import { Box, Container, Heading, Button, VStack } from "@chakra-ui/react";

const SlotMachine = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Slot Machine Game
        </Heading>
        <Box textAlign="center">
          <Button colorScheme="blue" size="lg">
            Spin
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default SlotMachine;
