import {
  Flex, Heading,
} from '@chakra-ui/react';
import { CardsProjects } from '../../components/CardProjects';
import projects from '../../data/projects.json';

export default function Projects() { 
  console.log(projects);
  
  return (
    <Flex
      id="projects"
      w="100%"
      h="auto"
      maxW={['300', '550', '700', '1191']}
      mx="auto"
      mb={50}
      flexDirection="column"
      align="center"
    >
      <Heading
        as="h1"
        textAlign="center"
        fontWeight="medium"
        pb={['10', '100']}
        fontSize={['22', '36']}
        color="orange.500"
      >
        Projects
      </Heading>
        <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
          {projects.map((project) => (
            <CardsProjects
              src={project.photo}
              title={project.title}
              text={project.description}
              href={project.linkUrl}
            />
          ))}
        </Flex>
    </Flex>
  );
}
