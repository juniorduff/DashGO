import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  email: string;
  password: string;
};

const SignInSchema = yup.object().shape({
  email: yup.string().email("E-mail invalido").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const handleSign: SubmitHandler<FormData> = (values) => {};

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSign)}
      >
        <Stack spacing={"4"}>
          <Input
            label={"E-mail"}
            {...register("email")}
            error={errors.email}
          ></Input>
          <Input
            {...register("password")}
            type={"password"}
            label={"Senha"}
            error={errors.password}
          ></Input>
        </Stack>

        <Button size={"lg"} type="submit" colorScheme="pink" mt={6}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
