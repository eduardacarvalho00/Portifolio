import {
  Flex, Heading,
} from '@chakra-ui/react';
import { CardsProjects } from '../../components/CardProjects';
import aluroniProjeto from '../../assets/aluroni_projeto.jpg';
import skyBlinded from '../../assets/skyeBlinded.jpg';
import dtMoney from '../../assets/dtMoney.jpg';
import dashgo from '../../assets/dashgo.jpg';

export default function Projects() {
  return (
    <Flex
      id="projects"
      w="100%"
      h="auto"
      maxW={['300', '550', '700', '1191']}
      mx="auto"
      mb={50}
      flexDirection={'column'}
      align="center"
    >
      
      <Heading
        as="h1"
        textAlign={'center'}
        fontWeight="medium"
        pb={['10', '100']}
        fontSize={['22', '26']}
        color="orange.500"
      >
        Projects
      </Heading>
        <Flex 
          flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
         
        >
          <CardsProjects
            src={aluroniProjeto}
            title="Aluroni"
            text="Restaurant website, made with react.js, sass, router DOM and module.css Search and filter by menu."
            href="https://react-lidando-com-arquivos-est-ticos.vercel.app"
            />
          <CardsProjects
            src={dashgo}
            title="Dashgo"
            text="Responsive dashboard with chakra UI, Next and typescript"
            href="https://dashgo-httmkhaiz-eduardacarvalho00.vercel.app"
          />
          <CardsProjects
            src={skyBlinded}
            title="Sky Blinded"
            text="Website to consult the weather forecast using api, react.js, styled components and typescript"
            href="https://sky-blinded.vercel.app"
          />
          <CardsProjects
            src={dtMoney}
            title="Dt Money"
            text="Spending Control, Shows Your Transactions and Allows You to Launch a New Transaction | using the MirageJS library, react.js, styled components and typescript"
            href="https://dtmoney-ignite2.vercel.app"
          />
        </Flex>
    </Flex>
  );
}
