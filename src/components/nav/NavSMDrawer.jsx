import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';
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
              <ScrollLink to="header">
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  Home
                </Text>
              </ScrollLink>

              <ScrollLink to="about">
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  About
                </Text>
              </ScrollLink>
              <ScrollLink to="features">
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  Features
                </Text>
              </ScrollLink>
              <ScrollLink to="tokenomics">
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  Tokenomics
                </Text>
              </ScrollLink>
              <Link href="#" isExternal target={'_blank'}>
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  Contract
                </Text>
              </Link>
              <Link href="#" isExternal target={'_blank'}>
                <Text px="6" py="5" fontSize={'20px'} as="a" cursor={'pointer'}>
                  Docs
                </Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default NavSMDrawer;
