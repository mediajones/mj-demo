import Image from "next/image";
import Link from "next/link";
import { Box, HStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <HStack width="98vw" height="90px" justifyContent="center">
        <Box mr="-17px">Site by</Box>
        <Box>
          <Link passHref href="https://mediajones.biz">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/mjlogo.svg"
                alt="Media Jones Logo"
                height="100px"
                width="100px"
              />
            </a>
          </Link>
        </Box>
      </HStack>
    </footer>
  );
}
