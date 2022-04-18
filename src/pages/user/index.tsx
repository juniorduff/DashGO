// @flow
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue
} from '@chakra-ui/react';
import * as React from 'react';
import {Sidebar} from "../../components/Sidebar";
import {RiAddLine, RiPencilLine} from "react-icons/ri";
import Pagination from "../../components/Pagination";
import Link from "next/link";

export default function UserList(props: Props) {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    });
    return (
        <Box>

            <Flex w={'100%'} my={'6'} maxWidth={1400} mx={'auto'} px={'6'}>
                <Sidebar/>

                <Box p={8} flex={1} borderRadius={8} bg={"gray.800"}>
                    <Flex mb={8} justify={'space-between'} alignItems={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>Usuarios</Heading>
                        <Link href={"/user/create"} passHref>

                            <Button
                                as={'a'}
                                size={'sm'}
                                fontSize={'sm'}
                                colorScheme={'pink'}
                                leftIcon={<Icon as={RiAddLine}></Icon>}
                            >
                                Criar usuario
                            </Button>
                        </Link>

                    </Flex>
                    <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th px={6} color={'gray.300'}>Usuario</Th>
                                <Th px={6} color={'gray.300'}>Data de cadastro</Th>
                                <Th width={8}></Th>
                                <Th px={["4", "4", "6"]} color={'gray.300'} width="8">
                                    <Checkbox colorScheme={"pink"}/>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={6} py={4}>
                                    <Checkbox colorScheme={"pink"}/>
                                </Td>
                                <Td px={6} py={4}>
                                    <Box>
                                        <Text fontWeight={'bold'}>Junior</Text>
                                        <Text fontSize={'sm'} color={'gray.300'}>Junior@teste.com.br</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td px={6} py={4}>
                                    01/01/2020
                                </Td>}
                                <Td>
                                    <Button
                                        as={'a'}
                                        size={'sm'}
                                        fontSize={'sm'}
                                        colorScheme={'purple'}
                                        leftIcon={<Icon as={RiPencilLine}></Icon>}
                                    >
                                        Editar usuario
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination></Pagination>
                </Box>
            </Flex>
        </Box>

    )
}

type Props = {};


