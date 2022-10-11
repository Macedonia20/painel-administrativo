import { RiDashboardLine, RiAddLine } from "react-icons/ri";


import { Flex, Button, Stack, Icon,  } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { NavLink } from "../components/Sidebar/NavLink";
import Link from "next/link";


export default function SignIn() {
  return (
    // O Flex é a mesma coisa que uma div 
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        // Deixando em coluna um abaixo do outro
        flexDir="column"
      >

        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="passoword" type="password" label="Senha" placeholder="Digite qualquer coisa..." />
        </Stack>

        <Link href="/dashboard" passHref>
          <Button
            as="a" 
            type="submit" 
            marginTop="6" 
            colorScheme="purple" 
            size="lg" mb="4"
          >
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>  
  )
}
