import Link from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image as CImage,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="black"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="gray.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link href={ctaLink}>
          <Button
            colorScheme="blackAlpha"
            bgColor="black"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="gray.900"
          opacity="0.6"
        >
          **Virtual tours available**
        </Text>
      </Stack>
      <Box
        rounded="3rem"
        w={{ base: "80%", sm: "60%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
        shadow="2xl"
      >
        {/* TODO: Make this change every X secs */}
        <CImage
          src={image}
          height="100%"
          width="100%"
          rounded="3rem"
          shadow="2xl"
        />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "Find your dream home",
  subtitle:
    "All open units have been newly renovated. Check our listings for rental opportunities",
  image:
    "https://cdn1.evoke.ie/wp-content/uploads/2020/09/Screen-Shot-2020-09-16-at-17.23.17.jpg",
  // "https://i.dmarge.com/2016/02/009-loft-atlanta-heirloom-design-build.jpg",
  // image: "https://fitsmallbusiness.com/wp-content/uploads/2019/09/FeatureImage_how-to-buy-an-apartment-complex.jpg",
  ctaText: "VIEW APARTMENTS",
  ctaLink: "/apartments",
};
