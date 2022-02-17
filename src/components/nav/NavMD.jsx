import { HStack, Text } from '@chakra-ui/react';
import ScrollLink from './ScrollLink';

function NavMD() {
  return (
    <>
      <ScrollLink to="header">
        <Text as="a" cursor={'pointer'} fontSize={'3xl'}>
          NovaX
        </Text>
      </ScrollLink>
      <HStack spacing="6" alignItems="center">
        <ScrollLink to="/about">
          <Text cursor={'pointer'} as="a" display="block">
            About
          </Text>
        </ScrollLink>
        <ScrollLink to="/focus">
          <Text cursor={'pointer'} as="a">
            Focus
          </Text>
        </ScrollLink>
        <ScrollLink to="/beneficiaries">
          <Text cursor={'pointer'} as="a">
            Beneficiaries
          </Text>
        </ScrollLink>
        <ScrollLink to="/news">
          <Text cursor={'pointer'} as="a">
            News
          </Text>
        </ScrollLink>

        <ScrollLink to="/gallery">
          <Text cursor={'pointer'} as="a">
            Gallery
          </Text>
        </ScrollLink>
      </HStack>
    </>
  );
}

export default NavMD;
