import { Box, Flex } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <Flex
      height="100vh"
      direction="column"
      align="center"
      maxW={{ xl: "100vw" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <Box flex={3}>{props.children}</Box>
      <Footer />
    </Flex>
  );
}
