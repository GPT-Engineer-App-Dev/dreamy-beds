import React, { useState } from "react";
import { Box, Container, Heading, Button, VStack } from "@chakra-ui/react";
import FruitSlot from "../components/FruitSlot";

const SlotMachine = () => {
  const [currentFruits, setCurrentFruits] = useState(["https://cdn-icons-png.flaticon.com/512/415/415733.png", "https://cdn-icons-png.flaticon.com/512/590/590769.png", "https://cdn-icons-png.flaticon.com/512/415/415734.png"]);

  const spinFruits = () => {
    const shuffledFruits = currentFruits
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setCurrentFruits(shuffledFruits);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Slot Machine Game
        </Heading>
        <FruitSlot />
        <Box textAlign="center" mt={8}>
          <Button colorScheme="blue" size="lg" onClick={spinFruits}>
            Spin
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default SlotMachine;
