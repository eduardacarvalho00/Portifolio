import {
  Box, Flex, Heading, Icon, Image, Text,
} from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import {
  SiSass, SiChakraui, SiStyledcomponents, SiVite, SiVisualstudio, SiExpo, SiMicrosoftazure, SiNextdotjs, SiYarn, 
} from 'react-icons/si';
import { FaGitAlt, FaReact } from 'react-icons/fa';
import { theme } from '../../styles/theme';

export default function MySkills() {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 900,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.orange[700],
      toolbar: { show: false },
    },
    grid: {
      show: false,
    },
    tooltip: { enabled: false },
    dataLabels: {
      enabled: false,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: theme.colors.orange[500],
      },
    },
    
    yaxis: {
      max: 100,
    },
    xaxis: {
      type: 'numeric',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    fill: {
      opacity: 0.9,
      type: 'gradient',
    },
    responsive: [
      {
        breakpoint: 400,
        options: {
          yaxis: {
            enable: true,
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
        },
      },
    ],
  };
  const series = [{
    data: [{
      x: 'HTML',
      y: 80,
    }, {
      x: 'CSS',
      y: 75,
    }, {
      x: 'TypeScript',
      y: 50,
    }, {
      x: 'JavaScript',
      y: 70,
    }, {
      x: 'MySql',
      y: 30,
    }],
  }];
  return (
    <Box
      id="skills"
      w="100%"
      h="530"
      maxW={['270', '300', '550', '700', '1191']}
      mx="auto"
      mt="100"
    >
        <Heading as="h1" fontSize={['22', '26']} fontWeight="medium" pb={['30', '100', '100']}>
          My<Text as="span" color="orange.500"> Skills</Text>
        </Heading>

      <Flex justify={'space-between'} flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
        <Box>
          Librarys UI / Preprocessors css :
          <Flex
            flexDirection={['row']}
            mt={5}
            mb={5}
          >
            <Icon as={SiSass} w={50} h={50} mr={4} title="SASS" color={'pink.400'} />
            <Icon as={SiChakraui} w={50} h={50} mr={4} title="Chakra UI" color="blue.200" />
            <Icon as={SiStyledcomponents} w={59} h={59} mr={4} title="Styled-Components" />
          </Flex>

          Framework / Library :
          <Flex
            flexDirection={'row'}
            mt={5}
            mb={5}
          >
            <Icon as={FaReact} w={50} h={50} mr={4} title="React" color={'blue.400'} />
            <Icon as={SiNextdotjs} w={50} h={50} mr={4} title="Next" color={'black'} />
            <Image src="https://static.vaadin.com/directory/user70309/icon/file1217457354947834532_1554935201923apex-charts-logo.png" w={59} h={58} mr={3} title="APexcharts" />
            <Image src="https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-768x890.png" w={50} h={59} title="React Native" />
          </Flex>

          Tools :

          <Flex
            flexDirection={'row'}
            mt={5}
            mb={5}
            flexWrap={'wrap'}
          >
            <Icon as={SiVite} w={50} h={50} mr={4} title="Vite" />
            <Icon as={SiYarn} w={50} h={50} mr={4} title="Yarn" color={'blue.400'} />
            <Icon as={FaGitAlt} w={50} h={50} mr={4} title="Git" color={'orange.700'} />
            <Icon as={SiMicrosoftazure} w={50} h={50} mr={4} title="Azure" color={'blue.500'} />
            <Icon as={SiExpo} w={50} h={50} mr={4} title="Vite" color={'black'} />
            <Icon as={SiVisualstudio} w={50} h={50} mr={4} title="Visual Studio Code" color={'blue.400'} />
          </Flex>
        </Box>
 
        <Box w={[280, 550]}>
          <Chart
            options={options}
            series={series}
            type="bar"
            width={'100%'}
         />
        </Box>
    </Flex>
  </Box>
    
  );
}
