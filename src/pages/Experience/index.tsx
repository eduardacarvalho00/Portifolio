import {
  AccordionButton,
  AccordionItem,
  Box, 
  AccordionIcon, 
  AccordionPanel,
  Accordion,
  Grid,
  GridItem,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

export default function Experience() {
  return (
    <Box
      w="100%"
      maxW={['270', '300', '550', '700', '1191']}
      mx="auto"
      h={['500px', '350px']}
      mt={['200', '350', '400', '150']}
      id="experience"
    >
        <Accordion allowToggle>
          <AccordionItem w="100%">
            <h2>
              <AccordionButton
                fontSize={[20, 30]}
                color="orange.500"
                _expanded={{ bg: 'tomato', color: 'white' }}
                _hover={{ bg: 'blackAlpha.300' }}
              >
                <Box as="span" flex="1" textAlign="left">
                  Work Experience
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Grid templateColumns={['repeat(0, 1fr)', 'repeat(2, 1fr)']} gap={3}>
                <GridItem colSpan={[0, 2]}>
                  <Text as="b"> Dataside Soluções em Dados Ltda </Text>
                </GridItem>
                <GridItem colEnd={[0, 4]}>
                  São José dos Campos, SP
                  April 2022 - Present
                </GridItem>
                <GridItem>
                  <Text as="i"> Trainee FrontEnd Developer</Text>
                </GridItem>
              </Grid>

              <UnorderedList mt="10px">
                <ListItem>
                  I develop internal applications using yarn, React.js, Next.js, Typescript, Chakra UI and API rest consumption with axios;
                </ListItem>
                <ListItem>
                  Quarterly follow-up with mentors with an evaluative purpose;
                </ListItem>
                <ListItem>
                  Working with agile scrum methodology; 
                </ListItem>
              </UnorderedList>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Box>
  );
}
