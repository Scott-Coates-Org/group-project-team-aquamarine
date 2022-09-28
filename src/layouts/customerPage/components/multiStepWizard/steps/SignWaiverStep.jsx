import React, { useCallback } from "react";
import { Box, Checkbox, Flex, Text, chakra } from "@chakra-ui/react";
import SignaturePad from "react-signature-pad-wrapper";
import { CheckIcon, CloseIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { setSignature } from "redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";

function SignWaiverStep() {
  const signatureRef = useRef(null);
  const checkRef = useRef(null);
  const signature = useSelector((state) => state.cart.signature);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleSignatureConfirm = (e) => {
    e.preventDefault();
    if (checked === false) {
      checkRef.current.focus();
      return alert("Please confirm the agreement.");
    }
    if (signatureRef.current.isEmpty()) {
      return alert("Please provide a signature first.");
    }

    const data = signatureRef.current.toDataURL("image/png");
    dispatch(setSignature({ signature: data }));
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      h="fit-content"
      w="100%"
      className="wizard_form__waiver"
    >
      <form onSubmit={onSubmit}>
        <Flex
          w="full"
          mt={0}
          flexDir="column"
          gap={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text fontSize="1em" fontWeight={400} flex="1" textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vitae bibendum elit. Phasellus fermentum mi ex, non tincidunt urna
            facilisis sed. Aliquam erat volutpat. Phasellus viverra convallis
            leo id blandit. Praesent sollicitudin nisi tortor, eget semper
            tortor egestas et. Nulla commodo lacus sit amet purus porttitor, sit
            amet mattis quam semper. Etiam auctor vehicula ligula vel gravida.
            Nulla tempor ultricies nisi posuere hendrerit.
          </Text>
          <Text
            fontSize="1em"
            fontWeight={400}
            flex="1"
            textAlign="left"
            mt={2}
          >
            Fusce sed erat sed eros accumsan interdum. Suspendisse lacus nibh,
            fermentum vitae odio ac, tincidunt volutpat augue. Phasellus vitae
            mauris ut est mollis tincidunt. Sed mollis eget diam nec
            condimentum.
          </Text>
        </Flex>
        <Flex
          w="full"
          mt={7}
          flexDir="row"
          gap={2}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Checkbox
            ref={checkRef}
            colorScheme={"gray"}
            isRequired
            checked={checked}
            onChange={() => setChecked(!checked)}
            mt="6px"
            mr={4}
            zIndex="0"
          />
          <Text fontSize="1em" fontWeight={400} flex="1" textAlign="left">
            Quisque nisi libero, feugiat quis felis ac, tristique posuere
            tortor. Fusce suscipit lectus orci. Integer et dui ipsum. Donec ac
            tincidunt tortor. Phasellus consequat sodales eleifend. Nunc urna
            lacus, aliquam a dignissim quis, imperdiet sed orci.
          </Text>
        </Flex>
        <Flex
          w="full"
          mt={7}
          flexDir="column"
          gap={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text fontSize="1em" fontWeight={400} flex="1" textAlign="left">
            In hac habitasse platea dictumst. Nulla convallis, velit at maximus
            vehicula, justo justo malesuada enim, vel efficitur ex ante vitae
            nisi. Pellentesque habitant morbi tristique senectus et netus et.
          </Text>
        </Flex>
        <Flex mt={5} flexDir="column" gap={2}>
          <Text fontSize="1.1em" fontWeight={600} textAlign="left">
            Sign here:
          </Text>
          <Box border="1px dashed black" height="150px" borderRadius={10}>
            <SignaturePad
              ref={signatureRef}
              height={150}
              options={{
                minWidth: 1,
                maxWidth: 4,
                penColor: "#000",
              }}
            />
          </Box>
          <Flex
            w="full"
            mt={1}
            flexDir="row"
            gap={2}
            alignItems="center"
            justifyContent="flex-end"
          >
            <chakra.button
              borderWidth="1px"
              borderRadius="md"
              fontSize="1em"
              bg="#e2e8f0"
              p="1px 8px"
              textAlign="center"
              onClick={() => signatureRef.current.clear()}
            >
              <SmallCloseIcon /> Clear
            </chakra.button>
            <chakra.button
              borderWidth="1px"
              borderRadius="md"
              fontSize="1em"
              bg="#e2e8f0"
              p="1px 8px"
              textAlign="center"
              onClick={handleSignatureConfirm}
            >
              <CheckIcon h={4} /> Confirm
            </chakra.button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
}

export default SignWaiverStep;
