import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import ScrollLink from './ScrollLink';

function NavSMDrawer(props) {
  return (
    <Drawer placement="left" onClose={props.onClose} isOpen={props.isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={'3xl'} textAlign={'center'}>
            NovaX
          </DrawerHeader>
          <DrawerBody padding={0} textAlign={'center'}>
            <VStack>
              <ScrollLink to="/">
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  Home
                </Text>
              </ScrollLink>

              <ScrollLink to="/about">
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  About
                </Text>
              </ScrollLink>
              <ScrollLink to="/focus">
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  Focus
                </Text>
              </ScrollLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default NavSMDrawer;
