import React from "react";
import { HStack, Image } from "@chakra-ui/react";

const fruits = ["https://cdn-icons-png.flaticon.com/512/415/415733.png", "https://cdn-icons-png.flaticon.com/512/590/590769.png", "https://cdn-icons-png.flaticon.com/512/415/415734.png"];

const FruitSlot = () => {
  return (
    <HStack justify="center" spacing={2}>
      {fruits.map((fruit, index) => (
        <Image key={index} src={fruit} boxSize="50px" />
      ))}
    </HStack>
  );
};

export default FruitSlot;
