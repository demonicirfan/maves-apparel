import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
  Avatar,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
  {
    id: 'hii',
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  {
    id: 'hii',
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  {
    id: 'hii',
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
];

export default function Aboutus() {
  const navigate = useNavigate();

  return (
    <Box p={4} my={['24', '32']}>
      <Stack
        spacing={4}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
        mb={'16'}
      >
        <Text fontSize={['3xl', '4xl']} fontFamily={'Italiana'}>
          This is the headline
        </Text>
        <Text color={'gray.600'} fontSize={['md', 'lg']} fontWeight={'200'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
        <Center
          as={'button'}
          bg={'gray.900'}
          px={'4'}
          py={'2'}
          onClick={() => {
            navigate('contact-us');
          }}
          _hover={{
            backgroundColor: 'transparent',
            color: 'black',
            outline: '2px solid black',
          }}
          w={'fit-content'}
          alignSelf={'center'}
          color={'white'}
        >
          <Text>Contact Us</Text>
        </Center>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'} alignSelf={'center'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <Stack
          pt={['16', '24']}
          spacing={4}
          as={Container}
          maxW={'3xl'}
          textAlign={'center'}
        >
          <Avatar
            alignSelf={'center'}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
            }}
            size={'xl'}
          ></Avatar>

          <Text color={'gray.600'} fontSize={['md', 'lg']} fontWeight={'200'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <Center flexDirection={'column'} gap={'2'}>
            <Text alignSelf={'center'} fontSize={['lg', 'xl']}>
              Name of CEO
            </Text>
            <Text alignSelf={'center'} fontSize={['xs', 'sm']}>
              CEO
            </Text>
          </Center>
        </Stack>
      </Container>
    </Box>
  );
}
