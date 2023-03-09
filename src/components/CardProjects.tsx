import {
  Flex, Image, Heading, Button, Text, Box, useColorModeValue, Link, 
} from '@chakra-ui/react';
import { MotionBox } from '../styles/animation';

interface CardProjectProps {
  src: string;
  title: string;
  text: string;
  href: string;
}

export function CardsProjects({
  src, title, text, href, 
}: CardProjectProps) {
  const borderColor = useColorModeValue('gray.600', 'gray.500');
  const bgCard = useColorModeValue('linear(to-l, whiteAlpha.300, blackAlpha.100)', 'linear(to-l, whiteAlpha.200, whiteAlpha.100)');
  return (
    <MotionBox whileHover={{ scale: 1.05 }}> 
      <Flex
        flexDirection="column"
        maxW={450}
        h={400}
        border="1px solid"
        borderColor={borderColor}
        bgGradient={bgCard}
        p="3"
        borderRadius={6}
        mr={[0, 6]}
        mb={4}
        cursor="default"
      >
        <Image
          src={src}
          maxW={'100%'}
          minH="150px"
          borderRadius={5}
        />
        <Heading
          fontWeight="medium"
          fontSize={26}
          textAlign="center"
          p={4}
          color="orange.500"
        >
          {title}
        </Heading>

        <Box
          overflow="auto"
          h="180"
          maxW="100%"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#FF4D00',
              borderRadius: '24px',
            },
          }}
        >
          <Text textAlign="justify">{text}</Text>
        </Box>
        
        <Link href={href} target="_blank">
          <Button
            bg="orange.500"
            mt={8}
            size="sm"
            w="100%"
            color="white"
            _hover={{
              bg: 'orange.800',
            }}
          >
            <Text fontWeight="light">
              GO
            </Text>
          </Button>
        </Link>
      </Flex>
    </MotionBox>   
  );
}
