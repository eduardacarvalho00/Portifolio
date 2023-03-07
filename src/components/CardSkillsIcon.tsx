import {
  Icon, Center, Tooltip, Image,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { MotionBox } from '../styles/animation';

interface CardProps{
  icon?: IconType; 
  iconImage?: string;
  title: string;
  color: string;
}

export function CardIcon({
  icon, color, title, iconImage, 
}: CardProps) {
  return (
    <MotionBox whileHover={{ scale: 1.1 }}> 
      <Tooltip hasArrow label={title} color="gray.50" borderRadius={3} bg="orange.500">
        <Center
          w={['150px', '200px']}
          h={['150px', '200px']}
          bg="gray.800"
          borderRadius={8}
          _hover={{
            backgroundColor: 'gray.700',
          }}
        >
          {iconImage 
            && <Image
              src={iconImage}
              w={['100px', '160px']}
              h={['100px', '160px']} 
          />}
          
          {icon 
            && <Icon
              as={icon}
              w={['100px', '180px']}
              h={['100px', '180px']}
              title={title}
              color={color} 
          />}
          
        </Center>
      </Tooltip>
    </MotionBox>
  );
}
