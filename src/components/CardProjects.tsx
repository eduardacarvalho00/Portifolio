import {
  Flex, Image, Heading, Link, Button, Text, Box, useColorModeValue, 
} from '@chakra-ui/react';

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
  const bgCard = useColorModeValue('linear(to-l, blackAlpha.400, whiteAlpha.100)', 'linear(to-l, whiteAlpha.200, whiteAlpha.100)');
  return (
       <Flex
         flexDirection={'column'}
         maxW={350}
         h={370}
         border="1px solid"
         borderColor={borderColor}
         bgGradient={bgCard}
         p={'3'}
         borderTopStartRadius={20}
         borderBottomEndRadius={20}
         mr={[0, 6]}
         mb={4}
      >
        <Image
          src={src}
          maxW={'100%'}
          minH={125}
          borderRadius={5}
          border="1px solid"
          borderColor={borderColor}
        />
        <Heading
          fontWeight={'medium'}
          fontSize={'20'}
          textAlign={'center'}
          p={4}
          color={'orange.500'}
        >
          {title}
        </Heading>

        <Box
          overflow={'auto'}
          h={'180'}
          maxW={'100%'}
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '24px',
            },
          }}
        >
          <Text textAlign={'justify'}>{text}</Text>
        </Box>
        
        <Link href={href} target="_blank">
          <Button
            bg={'orange.500'}
            fontWeight={'regular'}
            mt={8}
            size={'sm'}
            w={'100%'}
            color="white"
            _hover={{
              bg: 'orange.400',
            }}
          >
            GO
          </Button>
        </Link>
      </Flex>
  );
}
