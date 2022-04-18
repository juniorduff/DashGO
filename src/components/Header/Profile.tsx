import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

type Props = {
    showProfileDate?: boolean;
};

export default function Profile({showProfileDate = true}: Props) {
    return (
        <Flex align="center">
            {showProfileDate && (<Box mr={4} alignItems={'right'}>
                <Text fontSize={'sm'}>Junior,</Text>
                <Text fontSize={'sm'} fontWeight={'bold'}>
                    junior@ignite.com
                </Text>
            </Box>)}
            <Avatar size={'md'} name={'Junior'}/>
        </Flex>
    );
};
