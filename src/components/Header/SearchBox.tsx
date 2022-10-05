import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export  function SearchBox() {
    return (
        <Flex 
            as="label"
            flex="1"
            //paddingHorizontal
            py="4"
            //padding vertical
            px="5"
            //margin left
           right='-145px'
            maxWidth={250}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
          >
            <Input
              color="gray.50"
              variant="unstyled"
              px="4"
              mr="15"
              placeholder="Buscar na plataforma"
              _placeholder={{ color: 'gray.400'}}
              
            />
            <Icon as={RiSearchLine} fontSize="20" />
         </Flex>
    )
}