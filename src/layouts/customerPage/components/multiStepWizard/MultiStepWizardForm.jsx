import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ProgressBar from "../../../../components/ProgressBar";
import AddonSelectStep from "./steps/AddonSelectStep";
import Button from "./Button";
import ContactStep from "./steps/ContactStep";
import DateSelectStep from "./steps/DateSelectStep";
import PaymentStep from "./steps/PaymentStep";
import ProductSelectStep from "./steps/ProductSelectStep";
import SignWaiverStep from "./steps/SignWaiverStep";

function MultiStepWizardForm() {
  const [step, setStep] = useState(0);
  const formTitles = [
    "Select Date",
    "Select Product",
    "Select Add-ons",
    "Enter Contact Details",
    "Sign Waiver",
    "Enter Payment Details",
  ];

  const currentStep = (step) => {
    switch (step) {
      case 0:
        return <DateSelectStep />;
      case 1:
        return <ProductSelectStep />;
      case 2:
        return <AddonSelectStep />;
      case 3:
        return <ContactStep />;
      case 4:
        return <SignWaiverStep />;
      case 5:
        return <PaymentStep />;

      default:
        break;
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      flexDir="column"
      w="600px"
      h="fit-content"
      mt={10}
      mb={10}
      p={7}
      border="1px"
      borderColor="gray.200"
      borderRadius="5"
      boxShadow="lg"
      className="wizard_form"
    >
      <Flex
        align="center"
        alignItems="flex-start"
        justify="center"
        flexDir="column"
        w="100%"
        gap={2}
        className="wizard__progress_bar"
      >
        <Text
          textAlign={["left", "center"]}
          fontSize="1em"
          fontWeight={400}
        >{`Step ${step + 1} of ${formTitles.length}`}</Text>
        <ProgressBar step={step + 1} total={formTitles.length} />
      </Flex>
      <Flex
        w="100%"
        flexDir="column"
        alignItems="flex-start"
        gap={2}
        className="wizard__form_container"
      >
        <Flex
          mt={7}
          mb={4}
          alignItems="flex-start"
          className="wizard__form_container__header"
        >
          <Text
            textAlign={["left", "center"]}
            fontSize="1.5em"
            fontWeight={700}
          >
            {formTitles[step]}
          </Text>
        </Flex>
        <Flex
          align="center"
          alignItems="center"
          textAlign="center"
          justify="center"
          flexDir="column"
          w="100%"
          gap={2}
          className="wizard__form_container__body"
        >
          {currentStep(step)}
        </Flex>
        <Flex
          w="100%"
          flexDirection="column"
          pt={5}
          gap={3}
          className="wizard__form_container__footer"
        >
          {step === formTitles.length - 1 && (
            <Button
              text="Pay Now"
              onClick={() => console.log("Payment confirmed")}
              color="green"
            />
          )}
          {step < formTitles.length - 1 && (
            <Button
              text="Continue"
              onClick={() => setStep((prevState) => prevState + 1)}
              color="blue"
            />
          )}
          {step > 0 && step < formTitles.length && (
            <Button
              text="Back"
              onClick={() => setStep((prevState) => prevState - 1)}
              color="gray"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MultiStepWizardForm;
