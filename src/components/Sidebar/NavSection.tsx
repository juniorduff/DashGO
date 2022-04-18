// @flow
import {ReactNode} from 'react';
import {Box, Stack, Text} from "@chakra-ui/react";

type Props = {
    title: string
    children: ReactNode
};
export default function NavSection({title, children}: Props) {
    return (
        <Box>
            <Text fontWeight={'bold'} color={'gray.400'} fontSize={'sm'}> {title}</Text>
            <Stack spacing={4} mt={'8'} align={'stretch'}>
                {children}
            </Stack>
        </Box>

    );
};
