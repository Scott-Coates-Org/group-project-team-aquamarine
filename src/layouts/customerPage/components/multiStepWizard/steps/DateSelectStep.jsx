import React from 'react';
import Calendar from 'react-calendar';
import { Flex } from '@chakra-ui/react';
import './Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from 'redux/cartSlice';

function DateSelectStep() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.cart.date);

  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      h="fit-content"
      className="wizard_form"
    >
      <Calendar
        onChange={(e) => dispatch(setDate({ date: e.getTime() }))}
        value={selectedDate ? new Date(selectedDate) : new Date()}
        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
      />
    </Flex>
  );
}

export default DateSelectStep;
