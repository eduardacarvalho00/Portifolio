/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box, Flex, Heading, Text,
} from '@chakra-ui/react';
import homeImage from '../../assets/photoAvatar.jpeg';
import { MotionBox } from '../../styles/animation';

export default function Home() {
  return (
    <Flex
      id="home"
      w="100%"
      h={['800', '600']}
      maxW={['300', '550', '700', '1191']}
      mx="auto"
      justify={'space-between'}
      align="center"
      mt="78"
      flexDirection={['column', 'row']}
    >
       
      <MotionBox
        whileHover={{ scale: 1.1 }}
      >
        <Box boxSize={{ base: '300', md: '380', lg: '507' }}>
          <Avatar
            src={homeImage} 
            bg="#161616"
            size={['full', 'full']}
          /> 
        </Box>
      </MotionBox>

      <Box w="100%" maxW={415} h="464">

        <Heading as="h1" textAlign={'center'} fontWeight="medium" pb={['30', '100', '145']} fontSize={['22', '26']}>Who <Text as="span" color="orange.500"> I </Text> am?</Heading>

        <Text textAlign={'justify'} lineHeight="1.7" fontWeight="regular" p={[3, 0, 0, 0]} fontSize={['16', '18']}>
        My name is <Text as="span" color="orange.500">Eduarda Carvalho</Text>, I'm 18 years old and I'm in the third quarter of Systems Analysis and Development at Anhembi Morumbi.
        <br />
        I've always been very close to technology, especially video games, this made me fall in love with this area so at the end of 2021 I decided to become fullstack,
        I actually decided to venture into FrontEnd :)
        </Text>

      </Box>
    </Flex>
  );
}
