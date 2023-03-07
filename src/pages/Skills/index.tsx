import {
  Box, Center, Heading, Stack, Text,
} from '@chakra-ui/react';
import {
  SiSass, SiChakraui, SiStyledcomponents, SiVisualstudio, SiExpo, SiMicrosoftazure, SiNextdotjs, SiYarn, 
} from 'react-icons/si';
import { FaGitAlt, FaReact } from 'react-icons/fa';
import { CardIcon } from '../../components/CardSkillsIcon';

export default function MySkills() {
  return (
    <Box
      id="skills"
      w="100%"
      h="auto"
      maxW={['270', '300', '550', '700', '1191']}
      mx="auto"
      mt="100"
    >
      <Heading as="h1" fontSize={['22', '36']} fontWeight="medium" pb={['30', '100', '100']}>
          My<Text as="span" color="orange.500"> Skills</Text>
      </Heading>

      <Box>
        <Text fontSize={19}>Librarys UI / Preprocessors css :</Text>
        <Center>
          <Stack
            direction={['column', 'row']} 
            spacing={8}
            mt={5}
            mb={5}
            >
              <CardIcon
                icon={SiSass}
                title="SASS"
                color="pink.400" 
              />
              <CardIcon
                icon={SiChakraui}
                title="Chakra Ui"
                color="blue.200" 
              />
              <CardIcon
                icon={SiStyledcomponents}
                title="Styled-Components"
                color="pink.200" 
              />
            
          </Stack>
        </Center>

        <Text fontSize={19}>Framework :</Text>
        <Center>
          <Stack
            direction={['column', 'row']} 
            spacing={8}
            mt={5}
            mb={5}
            >
              <CardIcon
                icon={FaReact}
                title="React"
                color="blue.400" 
              />
              <CardIcon
                icon={SiNextdotjs}
                title="Next" 
                color="black" 
              />
              <CardIcon
                iconImage={'https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-768x890.png'}
                title="React Native" 
                color="black" 
              />
          </Stack>
        </Center>

        <Text fontSize={19}>Tools :</Text>
        <Center>
          <Stack 
            direction={['column', 'row']} 
            spacing={8}
            mt={5}
            mb={5}
              >
                <CardIcon
                  iconImage="https://vitejs.dev/logo-with-shadow.png"
                  title="Vite" 
                  color="black" 
                />
                <CardIcon
                  icon={SiYarn}
                  title="Yarn" 
                  color="blue.400" 
                />
                <CardIcon
                  icon={FaGitAlt}
                  title="Git" 
                  color="orange.700" 
                />
                <CardIcon
                  icon={SiMicrosoftazure}
                  title="Azure" 
                  color="blue.500" 
                />
                <CardIcon
                  icon={SiExpo}
                  title="Expo" 
                  color="black" 
                />
                <CardIcon
                  icon={SiVisualstudio}
                  title="Visual Studio Code" 
                  color="blue.400" 
                />
          </Stack>
        </Center>
      </Box>
    </Box>
  );
}
