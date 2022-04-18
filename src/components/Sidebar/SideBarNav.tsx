// @flow
import * as React from 'react';
import {Stack} from "@chakra-ui/react";
import NavSection from "./NavSection";
import NavLink from "./NavLink";
import {RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodFill} from "react-icons/ri";

type Props = {};
export default function SideBarNav(props: Props) {
    return (
        <Stack spacing={12} align={'flex-start'}>
            <NavSection title={"GERAL"}>
                <NavLink href={"/dashboard"} icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink href={"/user"} icon={RiContactsLine}>Usuarios</NavLink>
            </NavSection>
            <NavSection title={"AUTOMAÇÃO"}>
                <NavLink href={"/forms"} icon={RiInputMethodFill}>Formularios</NavLink>
                <NavLink href={"/automation"} icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>
        </Stack>
    );
};
