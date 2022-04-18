// @flow
import * as React from 'react';
import {Flex, Icon, Input} from "@chakra-ui/react";
import {RiSearchLine} from "react-icons/ri";

type Props = {};

export default function Search(props: Props) {
    return (
        <Flex
            as="label"
            flex={'1'}
            py={'4'}
            px={'8'}
            ml={'6'}
            color='gray.200'
            maxWidth={400}
            alignSelf="center"
            position="relative"
            bg={'gray.800'}
            borderRadius={'full'}
        >
            <Input
                placeholder={'Buscar na plataforma'}
                _placeholder={{
                    color: 'gray.400',
                    fontSize: 'sm'
                }}
                variant={'unstyled'}
                color={'gray.50'}/>
            <Icon as={RiSearchLine} fontSize={'20'}/>
        </Flex>
    );
};
