import {
  Flex,
  VStack,
  Text,
  Center,
  Stack,
  Box,
  Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import ContentLoader from 'react-content-loader';
import SimilarItems from '../components/Product/SimilarItems';

const BigScreenLoader = (props) => (
  <ContentLoader
    speed={2}
    width={800}
    height={500}
    viewBox='0 0 800 500'
    backgroundColor='#dedede'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='-7' y='21' rx='0' ry='0' width='286' height='296' />
    <rect x='316' y='938' rx='0' ry='0' width='166' height='6' />
    <rect x='307' y='271' rx='0' ry='0' width='330' height='9' />
    <rect x='306' y='251' rx='0' ry='0' width='330' height='9' />
    <rect x='306' y='230' rx='0' ry='0' width='330' height='9' />
    <rect x='307' y='54' rx='0' ry='0' width='100' height='8' />
    <rect x='306' y='189' rx='0' ry='0' width='148' height='8' />
    <rect x='306' y='208' rx='0' ry='0' width='189' height='11' />
    <rect x='308' y='74' rx='0' ry='0' width='148' height='8' />
  </ContentLoader>
);
const SmallScreenLoader = (props) => (
  <ContentLoader
    speed={2}
    width={330}
    height={400}
    viewBox='0 0 330 400'
    backgroundColor='#dedede'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='-7' y='21' rx='0' ry='0' width='286' height='296' />
    <rect x='316' y='938' rx='0' ry='0' width='166' height='6' />
    <rect x='2' y='342' rx='0' ry='0' width='100' height='8' />
    <rect x='3' y='362' rx='0' ry='0' width='148' height='8' />
  </ContentLoader>
);

const Product = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    try {
      fetch(`/api/v1/products/${id}`)
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => {
          setItem(jsonResponse.getProduct);
          console.log('product details - ' + jsonResponse.getProduct);
        });
    } catch (err) {
      console.log(err);
    }
  }, [setItem]);

  return (
    <VStack
      direction={'row'}
      maxW={'6xl'}
      mx={'auto'}
      bg={'#FAF9F8'}
      mt={['0', '0', '16']}
      pt={'16'}
    >
      {isLoading ? (
        <>
          <Flex
            display={{ base: 'flex', md: 'none' }}
            direction='column'
            mx={'auto'}
          >
            <SmallScreenLoader />
          </Flex>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            direction='row'
            gap={'16'}
            mx={'auto'}
          >
            <BigScreenLoader />
          </Flex>
        </>
      ) : (
        <Stack
          align={'flex-start'}
          spacing={['8', '16']}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box display={{ base: 'flex', md: 'none' }}>
            <Image src={item.img} h={'480px'} fit={'cover'} w={'100vw'} />
          </Box>

          <Center
            display={{ base: 'none', md: 'flex' }}
            maxW={'400px'}
            m='auto'
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: `${item.img}`,
                },
                largeImage: {
                  src: `${item.img}`,
                  width: 1200,
                  height: 1500,
                },
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: true,
              }}
            />
          </Center>

          <VStack
            spacing={'8'}
            align={'flex-start'}
            pt={['0', '8']}
            mx={'auto'}
          >
            <Text
              textTransform={'capitalize'}
              fontSize={['3xl', '4xl']}
              fontWeight={'600'}
            >
              {item.title}
            </Text>
            <VStack spacing={['2', '4']} align={'flex-start'} px={'auto'}>
              <Text fontSize={['md', 'xl']}>
                <Text as='span' fontWeight={'600'}>
                  Size{' '}
                </Text>
                - {item.size}
              </Text>
              <Text fontSize={['md', 'xl']}>
                <Text as='span' fontWeight={'600'}>
                  Code{' '}
                </Text>{' '}
                - #{item.code}
              </Text>
              <VStack align={'flex-start'} maxW={['300px', '500px']}>
                <Text
                  fontSize={['sm', 'lg']}
                  noOfLines={'4'}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur ea soluta quam officiis debitis! Similique cum ut
                  minus! Ut ratione eius voluptatem repellat. Consectetur
                  assumenda id aperiam numquam dolores quis, fugiat suscipit vel
                  blanditiis sapiente nulla nam omnis
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Stack>
      )}
      <SimilarItems category={item.category} />
    </VStack>
  );
};

export default Product;
