// @flow
import * as React from 'react';
import {Button} from "@chakra-ui/react";

type Props = {
    isCurrent?: boolean,
    pageNumber: number,
};
export default function PaginationItem({isCurrent = false, pageNumber}: Props) {
    if (isCurrent) {
        return (
            <Button size={"sm"}
                    fontSize={'xs'}
                    colorScheme={"pink"}
                    disabled
                    width={'4'}
                    _disabled={{
                        bgColor: 'pink.500',
                        cursor: 'default'
                    }}>
                {pageNumber}</Button>
        );
    }
    return (
        <Button size={"sm"}
                fontSize={'xs'}
                width={'4'}
                bg={"gray.700"}
                _hover={{
                    bgColor: 'gray.500',
                }}>
            {pageNumber}</Button>
    );
};
