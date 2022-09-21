import { Flex } from "@chakra-ui/react";
import React from "react";
import CustomerCart from "./components/CustomerCart";
import MultiStepWizardForm from "./components/multiStepWizard/MultiStepWizardForm";

function CustomerPage() {
  return (
    <Flex flexDir="row" gap={10}>
      <MultiStepWizardForm />
      <CustomerCart />
    </Flex>
  );
}

export default CustomerPage;
