import React, { useState } from "react";
import { chakra, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { collection, doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setNewCustomer } from "redux/customerSlice.js";
import { db } from "firebaseApi/client";
import { setContacts } from "redux/cartSlice";

function ContactStep() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const ifCustomer = useSelector((state) => state.customer.customer);

  const dispatch = useDispatch();

  const handleCustomerInfoSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: fullName,
      email: email,
      address: address,
    };
    // console.log(data);
    try {
      const newCustomerInfoRef = doc(collection(db, "customers"));
      await setDoc(newCustomerInfoRef, {
        ...data,
        id: newCustomerInfoRef.id,
      }).then(function () {
        // alert("Customer info successfully sent!");
        dispatch(
          setNewCustomer({ customer: { ...data, id: newCustomerInfoRef.id } })
        );
        dispatch(
          setContacts({ customer: { ...data, id: newCustomerInfoRef.id } })
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Flex
      align="center"
      alignItems="flex-start"
      textAlign="left"
      justify="flex-start"
      flexDir="column"
      w="100%"
      gap={2}
      className="wizard__contacts_form"
    >
      <form
        onSubmit={handleCustomerInfoSubmit}
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder=""
            // onChange={setRoomName()}
            onChange={(e) => setFullName(e.target.value)}
            value={ifCustomer.name ? ifCustomer.name : fullName}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder=""
            // onChange={setRoomName()}
            onChange={(e) => setEmail(e.target.value)}
            value={ifCustomer.email ? ifCustomer.email : email}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            type="text"
            placeholder=""
            // onChange={setRoomName()}
            onChange={(e) => setAddress(e.target.value)}
            value={ifCustomer.address ? ifCustomer.address : address}
          />
        </FormControl>
        {ifCustomer.name ? (
          <chakra.button
            mt={10}
            w="200px"
            px="3"
            py="2"
            bg={`green.200`}
            rounded="5"
            disabled
          >
            Saved
          </chakra.button>
        ) : (
          <chakra.button
            mt={10}
            w="200px"
            px="3"
            py="2"
            bg={`gray.200`}
            rounded="5"
            _hover={{ bg: `gray.300` }}
            // onClick={() => setIsSaved(true)}
            type="submit"
          >
            Save
          </chakra.button>
        )}
      </form>
    </Flex>
  );
}

export default ContactStep;
