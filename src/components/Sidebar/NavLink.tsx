// @flow
import * as React from 'react';
import {ElementType} from 'react';
import {Icon, Link as ChakraLink, LinkProps, Text} from "@chakra-ui/react";
import ActiveLink from "../activeLink";


interface Props extends LinkProps {
    icon: ElementType;
    children: string,
    href: string,
}

export default function NavLink({children, href, icon, ...rest}: Props) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display={'flex'} alignItems={'center'} {...rest}>
                <Icon as={icon} fontSize={'20'}/>
                <Text fontSize={'md'} ml={'4'}>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
};
