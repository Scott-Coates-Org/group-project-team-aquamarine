import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddonsQuantity } from "redux/cartSlice";

function AddonSelectStep() {
  const addons = useSelector((state) => state.cart.addons);
  const dispatch = useDispatch();

  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      h="fit-content"
      w="100%"
      className="wizard_form__products"
    >
      <Accordion allowToggle w="100%">
        <AccordionItem id="Socks">
          <h2>
            <AccordionButton _hover={{ bg: "#e2e8f0" }}>
              <Flex
                flex="1"
                textAlign="left"
                flexDir="row"
                alignItems="center"
                gap={5}
              >
                <img
                  // referrerPolicy="no-referrer"
                  width="100px"
                  height="75px"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/team-aquamarine.appspot.com/o/uploads%2Faddons%2Fsocks-Non-Slip.jpg?alt=media"
                  style={{
                    borderRadius: "",
                    border: "1px solid #e2e8f0",
                    objectFit: "cover",
                    margin: "5px 0",
                  }}
                />
                <Text fontSize="1.1em" fontWeight={600}>
                  Pair Of Grip Socks
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Flex flexDir="row" alignItems="center" gap={3}>
              <Text fontSize="1em" fontWeight={400} mt={2} flex="1">
                1 pair
              </Text>
              <Text fontSize="1em" fontWeight={400} mt={2}>
                $5.00
              </Text>
              <NumberInput
                defaultValue={0}
                min={0}
                max={20}
                w="90px"
                mt={2}
                display="flex"
                flexDir="row"
                alignItems="center"
                name="Socks"
                onChange={(value) =>
                  dispatch(
                    setAddonsQuantity({
                      id: "Socks",
                      name: "Grip Socks",
                      quantity: value,
                      price: 5,
                    })
                  )
                }
              >
                <NumberInputStepper left="0px" position="relative" h="30px">
                  <NumberDecrementStepper
                    borderRightRadius="0px !important"
                    borderLeftRadius="5px !important"
                    w="23px"
                    bg="gray.200"
                    _active={{ bg: "gray.300" }}
                    children="-"
                    fontWeight={500}
                  />
                </NumberInputStepper>
                <NumberInputField
                  focusBorderColor="#e2e8f0"
                  textAlign="center"
                  h="35px"
                  p={0}
                />
                <NumberInputStepper position="relative" h="30px">
                  <NumberIncrementStepper
                    borderRightRadius="5px !important"
                    borderLeftRadius="0px !important"
                    w="23px"
                    bg="gray.200"
                    _active={{ bg: "gray.300" }}
                    children="+"
                    fontWeight={500}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="Wristband">
          <h2>
            <AccordionButton _hover={{ bg: "#e2e8f0" }}>
              <Flex
                flex="1"
                textAlign="left"
                flexDir="row"
                alignItems="center"
                gap={5}
              >
                <img
                  // referrerPolicy="no-referrer"
                  width="100px"
                  height="75px"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/team-aquamarine.appspot.com/o/uploads%2Faddons%2F24_1653a.jpeg?alt=media"
                  style={{
                    borderRadius: "",
                    border: "1px solid #e2e8f0",
                    objectFit: "cover",
                    margin: "5px 0",
                  }}
                />
                <Text fontSize="1.1em" fontWeight={600}>
                  Silicone Wristband
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Flex flexDir="row" alignItems="center" gap={3}>
              <Text fontSize="1em" fontWeight={400} mt={2} flex="1">
                1 pc.
              </Text>
              <Text fontSize="1em" fontWeight={400} mt={2}>
                $3.00
              </Text>
              <NumberInput
                defaultValue={0}
                min={0}
                max={50}
                w="90px"
                mt={2}
                display="flex"
                flexDir="row"
                alignItems="center"
                name="Wristband"
                onChange={(value) =>
                  dispatch(
                    setAddonsQuantity({
                      id: "Wristband",
                      name: "Wristband",
                      quantity: value,
                      price: 3,
                    })
                  )
                }
              >
                <NumberInputStepper left="0px" position="relative" h="30px">
                  <NumberDecrementStepper
                    borderRightRadius="0px !important"
                    borderLeftRadius="5px !important"
                    w="23px"
                    bg="gray.200"
                    _active={{ bg: "gray.300" }}
                    children="-"
                    fontWeight={500}
                  />
                </NumberInputStepper>
                <NumberInputField
                  focusBorderColor="#e2e8f0"
                  textAlign="center"
                  h="35px"
                  p={0}
                />
                <NumberInputStepper position="relative" h="30px">
                  <NumberIncrementStepper
                    borderRightRadius="5px !important"
                    borderLeftRadius="0px !important"
                    w="23px"
                    bg="gray.200"
                    _active={{ bg: "gray.300" }}
                    children="+"
                    fontWeight={500}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="nylonBag">
          <h2>
            <AccordionButton _hover={{ bg: "#e2e8f0" }}>
              <Flex
                flex="1"
                textAlign="left"
                flexDir="row"
                alignItems="center"
                gap={5}
              >
                <img
                  // referrerPolicy="no-referrer"
                  width="100px"
                  height="75px"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/team-aquamarine.appspot.com/o/uploads%2Faddons%2F2017-04-18_171420-1.jpg?alt=media"
                  style={{
                    borderRadius: "",
                    border: "1px solid #e2e8f0",
                    objectFit: "cover",
                    margin: "5px 0",
                  }}
                />
                <Text fontSize="1.1em" fontWeight={600}>
                  Nylon Drawstring Bag
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            <Flex flexDir="row" alignItems="center" gap={3}>
              <Text fontSize="1em" fontWeight={400} mt={2} flex="1">
                1 pc.
              </Text>
              <Text fontSize="1em" fontWeight={400} mt={2}>
                $15.00
              </Text>
              <NumberInput
                defaultValue={0}
                min={0}
                max={50}
                w="90px"
                mt={2}
                display="flex"
                flexDir="row"
                alignItems="center"
                name="nylonBag"
                onChange={(value) =>
                  dispatch(
                    setAddonsQuantity({
                      id: "nylonBag",
                      name: "Nylon Bag",
                      quantity: value,
                      price: 15,
                    })
                  )
                }
              >
                <NumberInputStepper left="0px" position="relative" h="30px">
                  <NumberDecrementStepper
                    borderRightRadius="0px !important"
                    borderLeftRadius="5px !important"
                    w="23px"
                    bg="gray.200"
                    _active={{ bg: "gray.300" }}
                    children="-"
                    fontWeight={500}
                  />
                </NumberInputStepper>
                <NumberInputField
                  focusBorderColor="#e2e8f0"
                  textAlign="center"
                  h="35px"
                  p={0}
                />
                <NumberInputStepper position="relative" h="30px">
                  <NumberIncrementStepper
                    borderRightRadius="5px !important"
                    borderLeftRadius="0px !important"
                    w="23px"
                    bg="gray.200"
                    _active={{ bg: "gray.300" }}
                    children="+"
                    fontWeight={500}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default AddonSelectStep;
