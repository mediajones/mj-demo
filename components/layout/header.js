import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { CgMenuCake as MenuIcon } from "@react-icons/all-files/cg/CgMenuCake";
import { CgClose as CloseIcon } from "@react-icons/all-files/cg/CgClose";
//import Logo from "../ui/Logo";

const MenuItem = ({ children, isFirst, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mt={isFirst ? [10, 10, 0, 0] : [0, 5, 0, 0]}
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 0, md: 4, lg: 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

// const CloseIcon = () => (
//   <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
//     <title>Close</title>
//     <path
//       fill="white"
//       d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
//     />
//   </svg>
// );

// const MenuIcon = () => (
//   <svg
//     width="24px"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="white"
//   >
//     <title>Menu</title>
//     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//   </svg>
// );

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["black", "black", "black", "black"]}
      color={["gray.300", "gray.300", "gray.300", "gray.300"]}
      {...props}
    >
      <Flex align="center">
        <Link href="/">
          <Button bgColor="transparent">
            <Image src="/mjnamewhite.png" height="40px" width="40px" />
          </Button>
        </Link>
        {/* <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        /> */}
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "center", "center", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/" isFirst>
            Home
          </MenuItem>
          <MenuItem to="/apartments">Apartments</MenuItem>
          <MenuItem to="/about" isLast>
            About
          </MenuItem>
          {/* <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
              }}
            >
              Create Account
            </Button>
          </MenuItem> */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
