import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export  function Profile() {
    return (
        <Flex  align="center">
        <Box ml="8" mr="2" textAlign="right">
            <Text h="3">Matheus Macedo</Text>
            
            <Text  color="gray.300" fontSize="small">
                matheusmacedo643@gmail.com
            </Text>
        </Box>

        <Avatar marginLeft="20px" size="md" name="Matheus Macedo" src="https://github.com//macedonia20.png" />
    </Flex>

    )
    
}