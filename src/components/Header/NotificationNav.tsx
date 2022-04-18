import {HStack, Icon} from "@chakra-ui/react";
import {RiNotificationLine, RiUserLine} from "react-icons/ri";

type Props = {};

export default function NotificationNav(props: Props) {
    return (
        <HStack
            spacing={['8', '6']}
            pr={['8', '6']}
            mx={['8', '6']}
            py={'1'}
            mr={4}
            color={'gray.300'}
            borderColor={'gray.700'}
            borderRightWidth={1
            }>
            <Icon as={RiNotificationLine} fontSize={'20'}/>
            <Icon as={RiUserLine} fontSize={'20'}/>
        </HStack>
    );
};
