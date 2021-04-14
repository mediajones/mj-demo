import { Box } from "@chakra-ui/react";

export default function VirtualTour() {
  return (
    <Box width="80vw" height="70vh">
      <iframe
        src="https://app.lapentor.com/sphere/practice1"
        frameBorder={0}
        width="100%"
        height="100%"
        scrolling="no"
        allow="vr,gyroscope,accelerometer"
        allowFullScreen={true}
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      ></iframe>
    </Box>
  );
}
