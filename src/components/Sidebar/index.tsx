import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue
} from "@chakra-ui/react";
import SideBarNav from "./SideBarNav";
import {useSideBarDrawer} from "../../contexts/SideBarDrawerContext";

type Props = {};

export function Sidebar() {
    const {isOpen, onOpen, onClose} = useSideBarDrawer();
    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false,
    });
    if (isDrawerSideBar) {
        return (
            <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg={'gray.800'} p={'4'}>
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <SideBarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as={"aside"} w={'64'} mr={'8'}>
            <SideBarNav/>
        </Box>
    )
        ;
}
;

