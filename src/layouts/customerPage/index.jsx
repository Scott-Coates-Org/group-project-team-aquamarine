import { Flex } from "@chakra-ui/react";
import React from "react";
import CustomerCart from "./components/CustomerCart";
import ThankYou from "./components/ThankYou";
import MultiStepWizardForm from "./components/multiStepWizard/MultiStepWizardForm";
import TopNavCustomer from "./components/TopNavCustomer";
import { useSelector } from "react-redux";

function CustomerPage() {
  const payment = useSelector((status) => status.cart.paymentStatus);
  return (
    <Flex flexDir="column" gap={5} w="full" justifyContent="center">
      <TopNavCustomer />
      <Flex flexDir="row" gap={10} justifyContent="center">
        <MultiStepWizardForm />
        {!payment ? <CustomerCart /> : <ThankYou />}
      </Flex>
    </Flex>
  );
}

export default CustomerPage;
