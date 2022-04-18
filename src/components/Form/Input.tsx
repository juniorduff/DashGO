import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";
import { FieldError } from "react-hook-form";

interface Props extends ChakraInputProps {
  label?: string;
  error?: FieldError;
}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={props.name}>{label}</FormLabel>}
        <ChakraInput
          name={"email"}
          type="email"
          id={"email"}
          bgColor={"gray.900"}
          variant="filled"
          size={"lg"}
          _hover={{
            bgColor: "gray.900",
          }}
          ref={ref}
          {...props}
          focusBorderColor={"pink.500"}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }
);
