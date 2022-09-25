import { Box, useRadio } from "@chakra-ui/react";

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" fontSize="0.8em" display="flex">
      <input {...input} />
      <Box
        {...checkbox}
        mt={2}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "#90cdf4",
          color: "white",
          borderColor: "#90cdf4",
        }}
        _focus={
          {
            // boxShadow: "outline",
          }
        }
        w="55px"
        py={1}
        textAlign="center"
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioCard;
