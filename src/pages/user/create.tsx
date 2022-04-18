import React, { FunctionComponent } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import Link from "next/link";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface OwnProps {}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email(" e-mail invalid").required("Email is required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

type Props = OwnProps;

const CreateUser: FunctionComponent<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<createUserFormSchema> = (values) => {};
  return (
    <Box>
      <Header />

      <Flex w={"100%"} my={"6"} maxWidth={1400} mx={"auto"} px={"6"}>
        <Sidebar />
        <Box
          as={"form"}
          onSubmit={handleSubmit()}
          p={8}
          flex={1}
          borderRadius={8}
          bg={"gray.800"}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar usuario
          </Heading>
          <Divider my={6} borderColor={"gray.700"} />

          <VStack spacing="8">
            <SimpleGrid
              minChildWidth="240px"
              spacing={["6", "8"]}
              width={"100%"}
            >
              <Input name="name" label="Nome completo" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth={"240px"}
              spacing={["6", "8"]}
              width={"100%"}
            >
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password"
                type="password"
                label="Confirmação da Senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={"8"} justify={"flex-end"}>
            <HStack spacing={"4"}>
              <Link href={"/user"} passHref>
                <Button colorScheme={"whiteAlpha"}>Cancelar</Button>
              </Link>
              <Button colorScheme={"pink"}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
