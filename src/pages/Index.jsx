import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Button, Image, VStack, HStack, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Classic Bed",
    price: "$399",
    imageUrl: 'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYmVkfGVufDB8fHx8MTcwOTU3NjEyMXww&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.5,
  },
  {
    id: 2,
    name: "Modern Bed",
    price: "$499",
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWR8ZW58MHx8fHwxNzA5NTc2MTIxfDA&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.8,
  },
  {
    id: 3,
    name: "Queen Bed",
    price: "$599",
    imageUrl: 'https://images.unsplash.com/photo-1560448075-57d0285fc59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWVlbiUyMGJlZHxlbnwwfHx8fDE3MDk1NzYxMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.3,
  },
  {
    id: 4,
    name: "King Bed",
    price: "$699",
    imageUrl: 'https://images.unsplash.com/photo-1564032775255-6470bd36edf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW5nJTIwYmVkfGVufDB8fHx8MTcwOTU3NjEyMnww&ixlib=rb-4.0.3&q=80&w=1080',
    rating: 4.7,
  },
];

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars)
          .fill("")
          .map((_, i) => (
            <Icon as={FaStar} key={i} color="yellow.400" />
          ))}
        {halfStar && <Icon as={FaStarHalfAlt} color="yellow.400" />}
        {Array(emptyStars)
          .fill("")
          .map((_, i) => (
            <Icon as={FaStar} key={i} color="gray.300" />
          ))}
      </>
    );
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Comfortable Beds for a Good Night's Sleep
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} p={5} shadow="md" borderWidth="1px" bg={bg} borderRadius="lg">
              <Image borderRadius="md" src={product.imageUrl} alt={product.name} mb={4} />
              <VStack align="stretch" spacing={3}>
                <Heading as="h3" size="lg">
                  {product.name}
                </Heading>
                <Text fontSize="xl" fontWeight="bold">
                  {product.price}
                </Text>
                <HStack>{renderRating(product.rating)}</HStack>
                <Button leftIcon={<FaShoppingCart />} colorScheme="blue">
                  Add to Cart
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
