import { Image, Center, HStack, Text, Box, Heading } from '@chakra-ui/react';
import { Link as RouterLink, NavLink } from 'react-router-dom';

function Card(params) {
  return (
    <a href='to-card'>
      <Center
        flexDirection={'column'}
        bg={'white'}
        shadow={'xl'}
        mx={['8', '8', '8']}
        mb={'28'}
        _hover={{
          transform: 'translateY(-5px)',
          transition: 'transform 200ms ease-in-out 15ms',
          shadow: '2xl',
        }}
      >
        <Box boxSize={'300px'}>
          <Image
            src={params.imageURL}
            alt={params.title}
            fit={'cover'}
            h={['300px', '300px', '300px']}
            w={'100%'}
          />
        </Box>
        <HStack
          justifyContent={'space-between'}
          alignItems={'center'}
          w='100%'
          m={'2'}
          px={['3', '4']}
        >
          <Text fontSize={['13px', '20px']} color={'gray.600'}>
            #{params.code}
          </Text>
          <Text fontSize={['13px', '18px']} color={'gray.500'}>
            {params.size}
          </Text>
        </HStack>
        <Heading
          color={'black'}
          fontSize={['md', 'xl', '3xl']}
          alignSelf={'start'}
          p={['3', '4']}
          textTransform={'capitalize'}
        >
          {params.title}
        </Heading>
      </Center>
    </a>
  );
}

export default Card;
