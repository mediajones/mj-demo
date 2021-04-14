import { Box, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import NLink from "next/link";

export default function Listing({ details = {} }) {
  const {
    tourId,
    image,
    name,
    price,
    description,
    city,
    state,
    openings,
  } = details;

  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <NLink href={`/tour/${tourId}`}>
        <Button width="100%" mb={5}>
          Take virtual tour
        </Button>
      </NLink>

      <Text width="100%" fontSize="2xl" textAlign="center">
        <b>{name}</b>
      </Text>
      <Image borderRadius="md" src={image} />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme={openings ? "cyan" : "red"}>
          {openings ? "Openings" : "Full"}
        </Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="gray.800"
        >
          {city}, {state}
        </Text>
      </Flex>
      <Flex direction="column-reverse" justify="space-between">
        <Text
          mt={2}
          fontSize="lg"
          fontWeight="normal"
          flex={2}
          lineHeight="short"
        >
          {description}
        </Text>
      </Flex>
    </Box>
  );
}
