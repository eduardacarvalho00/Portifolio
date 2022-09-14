import {
  Alert,
  AlertIcon,
  Box, 
  Button, 
  Flex, 
  SlideFade, 
  Text,
  useDisclosure, 
} from '@chakra-ui/react';

export default function Experience() {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Box
      w="100%"
      maxW={['270', '300', '550', '700', '1191']}
      mx="auto"
      h={['250', '250']}
      mt={['200', '350', '400', '150']}
    >
        <Flex w={'100%'} id="experience" flexDirection={['column', 'row']}>

          <Button
            onClick={onToggle}
            size={'20'}
            bg={'transparent'}
            _hover={{
              bg: 'transparent',
            }}
            _active={{
              bg: 'transparent',
            }}
          >
            <Flex flexDirection={'column'} align="center">
              <Text
                fontSize={['22', '26']}
                fontWeight="medium"
                pt="51"
                _hover={{
                  color: 'orange.500',
                }}> 
                  Experience <Text as="span" color="orange.500" fontSize={['22', '26']}> +</Text>
                </Text>
              
              <Alert status="info" fontSize={10} bg={'transparent'}>
                <AlertIcon w={4} />
                  click here!
              </Alert>
            </Flex>
            
          </Button>

            <SlideFade in={isOpen} offsetY={'20px'}>
              <Box
                maxW={['270', '300', '550', '1000']}
                p={['10', '40px']}
                bg="orange.700"
                rounded="md"
                position="absolute"
              >
                <Text w={'190'} textAlign="justify" fontSize={18}>Currently I work at Dataside as a FrontEnd developer trainee, learning and making applications in react.js, react native, styled components and chakra UI. Start : 04/2022</Text>
              </Box>
            </SlideFade>

        </Flex>
    </Box>
  );
}
