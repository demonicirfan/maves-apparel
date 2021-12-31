import { Image, Center, HStack, Text, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Card(params) {
  return (
    <Link to={`/product/${params.id}`} reloadDocument>
      <Center
        flexDirection={'column'}
        bg={'white'}
        shadow={'xl'}
        mx={['2', '4', '2']}
        mb={['16', '28']}
        _hover={{
          transform: 'translateY(-5px)',
          transition: 'transform 200ms ease-in-out 15ms',
          shadow: '2xl',
        }}
      >
        <Box boxSize={['300px', '300px', '340px']}>
          <Image
            src={params.imageURL}
            alt={params.title}
            fit={'cover'}
            h={['300px', '300px', '340px']}
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
          <Text fontSize={['16px', '20px']} color={'gray.600'}>
            #{params.code}
          </Text>
          <Text
            fontSize={['16px', '18px']}
            color={'gray.500'}
            textTransform={'uppercase'}
          >
            {params.size}
          </Text>
        </HStack>
        <Heading
          fontSize={['xl', 'xl', '2xl']}
          alignSelf={'start'}
          px={['2', '4']}
          mb={'4'}
          textTransform={'capitalize'}
          fontWeight={'400'}
          color={'gray.700'}
          isTruncated
        >
          {params.title}
        </Heading>
      </Center>
    </Link>
  );
}

export default Card;
