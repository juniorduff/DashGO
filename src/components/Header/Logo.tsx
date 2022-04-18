// @flow
import * as React from 'react';
import {Text} from "@chakra-ui/react";

type Props = {};

export default function Logo(props: Props) {
    return (
        <Text fontSize={['2xl', '3xl']}
              fontWeight='bold'
              w={'64'}
              letterSpacing='tight'>DashGO
            <Text as={'span'} ml={1}
                  color={'pink.500'}>.</Text>
        </Text>
    );
};
