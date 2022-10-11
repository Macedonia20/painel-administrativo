import { Box,  Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="4">
        <Stack spacing="12" align="flex-start">
           <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiDashboardLine} href="/users">Usuários</NavLink>
           </NavSection>

           <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} href="/formularios">Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automocao">Automação</NavLink>
           </NavSection>
        </Stack>
    </Box>

    
    
  )
}