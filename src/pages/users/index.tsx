import { Button, Box, Flex, Heading, Icon, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UsersList() {
    return (
        <Box>
            <Header />

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal"> Usuários</Heading>

                        <Button
                            as="as" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} />}
                         >
                            Criar novo usuário
                        </Button>
                    </Flex>
                    <Thead>
                        <Tr>
                            <Th px="6" color="gray-300" width="8">
                                <Checkbox colorScheme="pink"/> 
                            </Th>
                            <Th> Usuário</Th>
                            <Th> Data de cadastro</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px="6">
                              <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td >
                             <Box>
                                <Text fontWeight="bold"> Matheus Macedo</Text>
                                <Text fontSize="sm" color="gray-300">matheusmacedo643@gmail.com</Text>

                             </Box>
                            </Td>
                            <Td>
                              05 de Outubro de 2022
                            </Td>
                        </Tr>
                    </Tbody>
                </Box>
            </Flex>

        </Box>
    );
}