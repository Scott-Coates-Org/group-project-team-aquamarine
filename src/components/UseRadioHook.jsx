import { HStack, useRadioGroup, Wrap } from "@chakra-ui/react";
import RadioCard from "./RadioCard";

function UseRadioHook({ groupName, options, defaultValue, onChange }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: groupName,
    defaultValue: defaultValue,
    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} width="100%">
      <Wrap p="5px 3px" alignContent="space-around">
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Wrap>
    </HStack>
  );
}

export default UseRadioHook;
