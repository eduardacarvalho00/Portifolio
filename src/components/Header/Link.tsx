import { Text } from '@chakra-ui/react';

interface LinkProps {
  title: string;
  href: string;
}

export function LinkHeader({ title, href }: LinkProps) {
  return (
      <Text
        as="a"
        href={href}
        fontWeight="regular"
        fontSize={['12.4', '16', '18']}
        px={[1, 2]}
        color="white"
        _hover={{
          color: 'orange.500',
          textDecoration: 'underline',
        }}
      >
        {title}
      </Text>
  );
}
