import { Flex, Button, Stack,  } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

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
          <Input name="passoword" type="password" label="Senha" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="purple" size="lg">Entrarrrrrr</Button>
      </Flex>

    </Flex>  )
}
