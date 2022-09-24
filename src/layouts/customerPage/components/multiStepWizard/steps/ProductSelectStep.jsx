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
import UseRadioHook from "components/UseRadioHook";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsQuantity, setProductsTime } from "redux/cartSlice";

function ProductSelectStep() {
  const timeOptions = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
  ];

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(products);
  }, [products]);

  // const handleTimeRadioSelect = (e) => {
  //   console.log(e);
  // };

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
        <AccordionItem id="kidsRoom">
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
                  width="150px"
                  height="100px"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/team-aquamarine.appspot.com/o/uploads%2Frooms%2Fkids_room.jpg?alt=media"
                  style={{
                    borderRadius: "",
                    border: "1px solid #e2e8f0",
                    objectFit: "cover",
                    margin: "5px 0",
                  }}
                />
                <Text fontSize="1.1em" fontWeight={600}>
                  Kid's Room (2 hour pass)
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Text fontSize="1em" fontWeight={600} mt={3}>
              Choose start time:
            </Text>
            {UseRadioHook({
              groupName: "kidsRoom",
              options: timeOptions,
              defaultValue: "10:00am",
              onChange: (value) =>
                dispatch(
                  setProductsTime({
                    id: "kidsRoom",
                    name: "Kid's 2h",
                    time: value,
                  })
                ),
            })}
            <Text fontSize="1em" fontWeight={600} mt={5}>
              Number of tickets:
            </Text>
            <Flex flexDir="row" alignItems="center" gap={3}>
              <Text fontSize="1em" fontWeight={400} mt={2} flex="1">
                120 minutes
              </Text>
              <Text fontSize="1em" fontWeight={400} mt={2}>
                $25.00
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
                name="kidsRoom"
                onChange={(value) =>
                  dispatch(
                    setProductsQuantity({
                      id: "kidsRoom",
                      name: "Kid's 2h",
                      quantity: value,
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

        <AccordionItem id="adultsRoom">
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
                  width="150px"
                  height="100px"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/team-aquamarine.appspot.com/o/uploads%2Frooms%2Fadults_room.jpg?alt=media"
                  style={{
                    borderRadius: "",
                    border: "1px solid #e2e8f0",
                    objectFit: "cover",
                    margin: "5px 0",
                  }}
                />
                <Text fontSize="1.1em" fontWeight={600}>
                  Adult's Room (2 hour pass)
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            Ut enimad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <Text fontSize="1em" fontWeight={600} mt={3}>
              Choose start time:
            </Text>
            {UseRadioHook({
              groupName: "adultsRoom",
              options: timeOptions,
              defaultValue: "10:00am",
              onChange: (value) =>
                dispatch(
                  setProductsTime({
                    id: "adultsRoom",
                    name: "Adult's 2h",
                    time: value,
                  })
                ),
            })}
            <Text fontSize="1em" fontWeight={600} mt={5}>
              Number of tickets:
            </Text>
            <Flex flexDir="row" alignItems="center" gap={3}>
              <Text fontSize="1em" fontWeight={400} mt={2} flex="1">
                120 minutes
              </Text>
              <Text fontSize="1em" fontWeight={400} mt={2}>
                $20.00
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
                name="adultsRoom"
                onChange={(value) =>
                  dispatch(
                    setProductsQuantity({
                      id: "adultsRoom",
                      name: "Adult's 2h",
                      quantity: value,
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

        <AccordionItem id="adultsRoomUnlim">
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
                  width="150px"
                  height="100px"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/team-aquamarine.appspot.com/o/uploads%2Frooms%2Fadults_room.jpg?alt=media"
                  style={{
                    borderRadius: "",
                    border: "1px solid #e2e8f0",
                    objectFit: "cover",
                    margin: "5px 0",
                  }}
                />
                <Text fontSize="1.1em" fontWeight={600}>
                  Adult's Room (Full Day Pass)
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            Ut enimad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <Text fontSize="1em" fontWeight={600} mt={3}>
              Choose start time:
            </Text>
            {UseRadioHook({
              groupName: "adultsRoomUnlim",
              options: timeOptions,
              defaultValue: "10:00am",
              onChange: (value) =>
                dispatch(
                  setProductsTime({
                    id: "adultsRoomUnlim",
                    name: "Adult's Unlim",
                    time: value,
                  })
                ),
            })}
            <Text fontSize="1em" fontWeight={600} mt={5}>
              Number of tickets:
            </Text>
            <Flex flexDir="row" alignItems="center" gap={3}>
              <Text fontSize="1em" fontWeight={400} mt={2} flex="1">
                Full Day
              </Text>
              <Text fontSize="1em" fontWeight={400} mt={2}>
                $50.00
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
                name="adultsRoomUnlim"
                onChange={(value) =>
                  dispatch(
                    setProductsQuantity({
                      id: "adultsRoomUnlim",
                      name: "Adult's Unlim",
                      quantity: value,
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

export default ProductSelectStep;
