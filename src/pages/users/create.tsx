import { Button, Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pags";
import { Sidebar } from "../../components/Sidebar";

export default function UsersList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1300} mx="auto" px="6">
                
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input name="name" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmacao de senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="purple">Salvar</Button>
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                        </HStack>

                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
} 