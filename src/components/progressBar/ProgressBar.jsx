import { Box } from "@chakra-ui/react";
import React from "react";

function ProgressBar({ step, total }) {
  const level = (step / total) * 100;
  return (
    <Box w="100%" className="wizard__progress_bar">
      <Box
        border="1px"
        borderColor="gray.300"
        borderRadius="5"
        w="100%"
        h="12px"
        className="progress_bar__container"
      >
        <Box
          border="1px"
          borderColor="white"
          className="progress_bar__level"
          borderRadius="5"
          w={`${level}%`}
          h="10px"
          bg="gray.400"
        ></Box>
      </Box>
    </Box>
  );
}

export default ProgressBar;
