import {Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react";
import {useSideBarDrawer} from "../../contexts/SideBarDrawerContext";
import {RiMenuLine} from "react-icons/ri";
import Search from "./Search";
import NotificationNav from "./NotificationNav";
import Profile from "./Profile";

export function Header() {
    const {onOpen} = useSideBarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Flex
            as="header"
            w={"100%"}
            maxWidth={1480}
            h={'20'}
            mx={'auto'}
            mt={'4'}
            px={'6'}
            align={'center'}
        >
            {!isWideVersion && (
                <IconButton aria-label="open navigation"
                            icon={<Icon as={RiMenuLine}/>} fontSize={24}
                            variant={'unstyled'}
                            onClick={onOpen}
                            mr={2}
                />
            )}
            <Search/>

            <Flex align={'center'} ml={'auto'}>
                <NotificationNav/>
                <Profile showProfileDate={isWideVersion}/>
            </Flex>
        </Flex>
    )
}
