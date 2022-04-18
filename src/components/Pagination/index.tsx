// @flow
import * as React from 'react';
import {Box, Stack} from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

type Props = {};
export default function Pagination(props: Props) {
    return (
        <Stack
            direction={["column", 'row']}
            mt={8}
            justify={'space-between'}
            alignItems={'center'}
            spacing={6}
        >
            <Box><strong>0</strong> - <strong>10</strong> de <strong>110</strong></Box>
            <Stack direction={'row'} spacing={2}>
                <PaginationItem isCurrent pageNumber={1}></PaginationItem>
                <PaginationItem pageNumber={2}></PaginationItem>
                <PaginationItem pageNumber={3}></PaginationItem>
                <PaginationItem pageNumber={4}></PaginationItem>
                <PaginationItem pageNumber={5}></PaginationItem>


            </Stack>


        </Stack>
    );
};
