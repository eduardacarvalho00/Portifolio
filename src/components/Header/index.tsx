import {
  Flex, Text, Box, Divider, Button, useColorMode, useColorModeValue,
} from '@chakra-ui/react';
import { MotionBox } from '../../styles/animation';
import { LinkHeader } from './Link';

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue('🌒', '☀️');

  return (
    <Flex flexDirection={'column'} bg="#161616">
      <Flex
        as="header"
        w="100%"
        h={['20', '93']}
        maxW={['550', '550', '700', '1191']}
        mx="auto"
        justify={['center', 'space-between']}
        align="center"
        flexDirection={['column', 'row']}
        
      >
        <MotionBox 
          whileHover={{ scale: 1.3, rotate: 20 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
          }}
        >
          <Text color="orange.500" fontWeight={'bold'} fontSize={['16', '20']}>Eduarda .</Text>
        </MotionBox>
        <Box>
          <LinkHeader title="HOME" href="#home" />
          <LinkHeader title="MY SKILLS" href="#skills" />
          <LinkHeader title="EXPERIENCE" href="#experience" />
          <LinkHeader title="PROJECTS" href="#projects" />
          <Button
            onClick={toggleColorMode}
            p={0}
            bg="#161616"
            _hover={{
              bg: '#161616',
            }}
          >
            <Text fontSize={['18', '24']}>
              {Icon}
            </Text>
          </Button>
        </Box>
        
      </Flex>
      <Divider bg={'orange.500'} />
    </Flex>
    
  );
}
