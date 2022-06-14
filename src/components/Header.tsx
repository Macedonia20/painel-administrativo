import { Flex, Box, Text, Input, Icon, HStack, Avatar } from '@chakra-ui/react'
import { RiNotificationOffLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
export function Header() {
    return (
      <Flex 
      as="header"
      width="100%" 
      maxWidth={1300}
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
          width="100"
        >
          dashgo
          <Text as="span" marginLeft="2" color="purple.500">.</Text>
         </Text> 

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

         <Flex
           align="center"
           ml="auto"
         >
            <HStack
              spacing="3"
              mx="-3"
              pr="8"
              py="1"
              color="gray.300"
              borderRightWidth={1}
              borderColor="gray.700"
            >
              <Icon as={RiNotificationOffLine} fontSize="20" />
              <Icon as={RiUserAddLine} fontSize="20" />
            </HStack>
            |
            <Flex align="center">
              <Box ml="8" mr="2" textAlign="right">
                <Text h="3">Matheus Macedo</Text>
                <Text  color="gray.300" fontSize="small">
                  matheusmacedo643@gmail.com
                </Text>
              </Box>

              <Avatar marginLeft="20px" size="md" name="Matheus Macedo" src="https://github.com//macedonia20.png" />
            </Flex>
         </Flex>
      </Flex>
    );
}