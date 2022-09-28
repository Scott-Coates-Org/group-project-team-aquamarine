import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "./datepicker.css";

// 18 half hours so 100% width / 18 ~ 6.5% for half an hour + 2% to be on center of it

// if no data is displayed, check that you have correct date (28 or 29 of september)

const dummyData = [
  {
    roomName: "Room 1",
    id: 1,
    capacity: 70,
    bookings: [
      {
        start: new Date("2022-09-28T11:00:00"),
        end: new Date("2022-09-28T11:30:00"),
        pax: 30,
        id: 1,
      },
      {
        start: new Date("2022-09-28T12:00:00"),
        end: new Date("2022-09-28T13:30:00"),
        pax: 40,
        id: 2,
      },
    ],
  },
  {
    roomName: "Room 2",
    id: 2,
    capacity: 40,
    bookings: [
      {
        start: new Date("2022-09-28T15:00:00"),
        end: new Date("2022-09-28T15:30:00"),
        pax: 14,
        id: 1,
      },
      {
        start: new Date("2022-09-28T12:40:00"),
        end: new Date("2022-09-28T14:00:00"),
        pax: 34,
        id: 2,
      },
      {
        start: new Date("2022-09-29T11:00:00"),
        end: new Date("2022-09-29T14:00:00"),
        pax: 18,
        id: 3,
      },
    ],
  },
  {
    roomName: "Room 3",
    id: 3,
    capacity: 50,
    bookings: [
      {
        start: new Date("2022-09-28T16:00:00"),
        end: new Date("2022-09-28T16:30:00"),
        pax: 14,
        id: 1,
      },
      {
        start: new Date("2022-09-28T13:00:00"),
        end: new Date("2022-09-28T15:00:00"),
        pax: 3,
        id: 2,
      },
    ],
  },
  {
    roomName: "Room 4",
    id: 4,
    capacity: 20,
    bookings: [
      {
        start: new Date("2022-09-29T17:00:00"),
        end: new Date("2022-09-29T17:30:00"),
        pax: 14,
        id: 1,
      },
      {
        start: new Date("2022-09-28T10:45:00"),
        end: new Date("2022-09-28T14:00:00"),
        pax: 20,
        id: 2,
      },
      {
        start: new Date("2022-09-29T13:00:00"),
        end: new Date("2022-09-29T15:00:00"),
        pax: 18,
        id: 3,
      },
    ],
  },
];

function DailyBookings() {
  const [date, setDate] = useState(new Date());

  return (
    <Box maxH="calc(100vh - 16rem)" overflowY="auto">
      <Text fontWeight="bold" fontSize="3xl" marginBottom={8}>
        Daily Capacity
      </Text>

      <Flex>
        <Button
          rounded={8}
          mr={1}
          bgColor="blackAlpha.200"
          fontSize="xs"
          onClick={() => {
            setDate(new Date(date.setDate(date.getDate() - 1)));
          }}
          _hover={{ bgColor: "blackAlpha.300" }}
        >
          <ArrowLeftIcon />
        </Button>
        <DatePicker
          selected={date}
          onChange={setDate}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          placeholderText="dd/mm/yyyy"
          dateFormat="dd/MM/yyyy"
          calendarStartDay={1}
        />
        <Button
          ml={1}
          bgColor="blackAlpha.200"
          fontSize="xs"
          onClick={() => {
            setDate(new Date(date.setDate(date.getDate() + 1)));
          }}
          _hover={{ bgColor: "blackAlpha.300" }}
        >
          <ArrowRightIcon />
        </Button>
      </Flex>

      <Flex width="full" direction="column" mt={6}>
        <Flex justifyContent="space-around" pl={16} fontWeight="black">
          <Text>10:00</Text>
          <Text>10:30</Text>
          <Text>11:00</Text>
          <Text>11:30</Text>
          <Text>12:00</Text>
          <Text>12:30</Text>
          <Text>13:00</Text>
          <Text>13:30</Text>
          <Text>14:00</Text>
          <Text>14:30</Text>
          <Text>15:00</Text>
          <Text>15:30</Text>
          <Text>16:00</Text>
          <Text>16:30</Text>
          <Text>17:00</Text>
          <Text>17:30</Text>
        </Flex>

        <Box
          w="full"
          bg="blackAlpha.200"
          p={2}
          px={4}
          rounded={8}
          fontWeight="bold"
          textColor="blackAlpha.700"
        >
          Room
        </Box>

        {dummyData.map(({ roomName, bookings, capacity, id }) => {
          const todayBookings = bookings.filter(
            (booking) =>
              booking.start.getDate() === date.getDate() &&
              booking.start.getMonth() === date.getMonth() &&
              booking.start.getFullYear() === date.getFullYear()
          );

          return (
            <Flex
              w="full"
              bg="whiteAlpha.600"
              fontWeight="bold"
              rounded={8}
              position="relative"
              px={4}
              pt={1}
              key={id}
            >
              <Box w={16} py={4}>
                <Text>{roomName}</Text>
                <Text fontWeight="normal" fontSize="sm">
                  Holds {capacity}
                </Text>
              </Box>
              <Box flex={1} top={0} position="relative">
                {/* THIS IS STATIC DATA TO DESCRIBE HOW THE BOOKINGS ARE DISPLAYED (IT
              IS SAVE TO DELETE LATER) */}
                <Box
                  h="full"
                  w="6.5%" // 1 hour
                  bg="purple.600"
                  position="absolute"
                  top={0}
                  left="2%" // Starts at 10:00 so 2% to be on center
                  textColor="white"
                  p={2}
                  rounded={8}
                >
                  <Text fontSize="sm">7 pax</Text>
                  <Text fontSize="xs" fontWeight="normal">
                    33 left
                  </Text>
                </Box>

                {todayBookings.map((booking) => {
                  const { start, end, pax } = booking;

                  const startHour = start.getHours();
                  const startMinute = start.getMinutes();
                  const endHour = end.getHours();
                  const endMinute = end.getMinutes();

                  const startPercentage =
                    (startHour - 10) * 13 + (startMinute / 30) * 6.5;
                  const endPercentage =
                    (endHour - 10) * 13 + (endMinute / 30) * 6.5;

                  const widthPercentage = endPercentage - startPercentage;

                  return (
                    <Box
                      h="full"
                      w={`${widthPercentage}%`}
                      bg="purple.600"
                      position="absolute"
                      top={0}
                      left={`${startPercentage + 2}%`}
                      textColor="white"
                      p={2}
                      rounded={8}
                      key={booking.id}
                    >
                      <Text fontSize="sm">{pax} pax</Text>
                      <Text fontSize="xs" fontWeight="normal">
                        {capacity - pax} left
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}

export default DailyBookings;
