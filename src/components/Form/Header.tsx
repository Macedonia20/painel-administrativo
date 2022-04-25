import { Flex, Text, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
export function Header() {
    return (
      <Flex 
      as="header"
      width="100%" 
      maxWidth={1480}
      height="20"
      // Margin horizontal auto
      marginX="auto"
      marginTop="4"
      textAlign="center"
      paddingX="10"
      >
        <Text  
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="tight"
          width="64"
        >
          sos
          <Text as="span" marginLeft="1" color="purple.500">.</Text>
         </Text> 

          <Flex 
            as="label"
            flex="1"
            //paddingHorizontal
            py="4"
            //padding vertical
            px="8"
            //margin left
            ml="6"
            maxWidth={400}
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
              mr="4"
              placeholder="Buscar na plataforma"
              _placeholder={{ color: 'gray.400'}}
            />

            <Icon as={RiSearchLine} fontSize="20" />
         </Flex>
      </Flex>
    );
}