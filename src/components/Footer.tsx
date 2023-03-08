import {
  Divider, Flex, Link, Text, Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  return (
    <Flex
      as="footer"
      flexDirection={'column'}
      justify={'space-evenly'}
      align={'center'}
      w="100%"
      h={200}
      position={'absolute'}
      bg="#161616"
      color={'white'}
    >
      <Divider bg="orange.500" />

      <Flex
        flexDirection={'column'}
        justify={'center'}
        h={200}
      >
        <Text textAlign={'center'} fontSize={20}>
          Feito com carinho <br /> por Duda 🧡
        </Text>
      </Flex>
      
      <Flex pb={4}>
        <Link href="https://github.com/eduardacarvalho00" target={'_blank'}>
         <Icon as={FaGithub} fontSize={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/eduardacarvalho9833/" target={'_blank'}>
          <Icon as={SiLinkedin} fontSize={30} mr={2} ml={2} />
        </Link>
        <Link href="mailto:eduardacarvalhoraimundo@gmail.com" target={'_blank'}>
          <Icon as={SiGmail} fontSize={30} />
        </Link>
        
      </Flex>

    </Flex>
  );
}
