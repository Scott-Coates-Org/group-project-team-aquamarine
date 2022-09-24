import React from "react";
import Calendar from "react-calendar";
import { Box, Flex, Text } from "@chakra-ui/react";
import "./Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "redux/cartSlice";

function DateSelectStep() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.cart.date);

  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      h="fit-content"
      className="wizard_form__calendar"
    >
      <Calendar
        onChange={(e) => dispatch(setDate({ date: e.getTime() }))}
        value={selectedDate ? new Date(selectedDate) : null}
        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Flex alignItems="center" gap={5} mt={8}>
        <Flex alignItems="center" gap={2}>
          <Box border="1px" borderColor="gray.200" w={5} h={5} />
          <Text>Date Unavailable</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Box border="1px" borderColor="gray.200" w={5} h={5} bg="#dae1e8" />
          <Text> Today's Date</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <Box border="1px" borderColor="gray.200" w={5} h={5} bg="#90cdf4" />
          <Text>Selected Date</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DateSelectStep;
