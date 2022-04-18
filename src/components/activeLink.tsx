// @flow
import * as React from 'react';
import {cloneElement, ReactElement} from 'react';
import Link, {LinkProps} from "next/link";

interface Props extends LinkProps {
    children: ReactElement,
};
export default function ActiveLink({children, ...rest}: Props) {
    const isActive = typeof window !== 'undefined'
        && window.location.pathname === rest.href
        || window.location.pathname.startsWith(String(rest.href));
    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}

        </Link>
    );
};
