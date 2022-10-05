import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="100">
            dashgo
            <Text as="span" marginLeft="2" color="purple.500">.</Text>
       </Text> 
    )
}