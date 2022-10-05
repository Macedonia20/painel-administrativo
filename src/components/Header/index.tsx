import { Flex } from '@chakra-ui/react'
import { Profile } from './Profile';
import { Notification } from './NotificationNav';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';

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
        <Logo />
        <SearchBox />
         
        <Flex align="center" ml="auto" >
          <Notification />
          <Profile />

        </Flex>
      </Flex>
    );
}