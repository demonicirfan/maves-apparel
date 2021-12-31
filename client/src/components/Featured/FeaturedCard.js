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
        <Box boxSize={['80vw', '80vw', '340px']} maxW={'350px'} maxH={'360px'}>
          <Image
            src={params.imageURL}
            alt={params.title}
            fit={'cover'}
            h={['80vw', '80vw', '340px']}
            maxH={'350px'}
            maxW={'350px'}
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
          fontWeight={'200'}
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
