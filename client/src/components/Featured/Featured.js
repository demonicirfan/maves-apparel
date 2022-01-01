import { Flex, VStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './FeaturedCard.js';
import ContentLoader from 'react-content-loader';

const BigScreenLoader = (props) => (
  <ContentLoader
    speed={2}
    width={302}
    height={422}
    viewBox='0 0 302 422'
    backgroundColor='#dedede'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='12' y='6' rx='0' ry='0' width='274' height='281' />
    <rect x='13' y='309' rx='0' ry='0' width='100' height='8' />
    <rect x='13' y='341' rx='0' ry='0' width='271' height='8' />
  </ContentLoader>
);
const SmallScreenLoader = (props) => (
  <ContentLoader
    speed={2}
    width={244}
    height={360}
    viewBox='0 0 244 360'
    backgroundColor='#dedede'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='14' rx='0' ry='0' width='244' height='207' />
    <rect x='1' y='250' rx='0' ry='0' width='100' height='8' />
    <rect x='-1' y='274' rx='0' ry='0' width='244' height='8' />
  </ContentLoader>
);
const Featured = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch('/api/v1/products/?featured=true')
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          }
        })

        .then((jsonResponse) => {
          const firstSixItems = jsonResponse.getProducts.slice(0, 6);
          setItems(firstSixItems);
        });
    } catch (err) {
      console.log(err);
    }
  }, [setItems]);

  return (
    <VStack direction={'row'} maxW={'6xl'} mx={'auto'} bg={'#FAF9F8'}>
      <Text
        fontFamily={'Italiana'}
        color={'black'}
        fontSize={['3xl', '4xl']}
        mx={'auto'}
        my={['4', '8']}
      >
        Featured
      </Text>
      <Flex wrap={'wrap'} justifyContent={'space-around'} px={['0', '8', '8']}>
        {isLoading ? (
          <>
            <Flex display={{ base: 'flex', md: 'none' }} direction='column'>
              <SmallScreenLoader />
              <SmallScreenLoader />
              <SmallScreenLoader />
            </Flex>
            <Flex
              display={{ base: 'none', md: 'flex' }}
              direction='row'
              gap={'5vw'}
            >
              <BigScreenLoader />
              <BigScreenLoader />
              <BigScreenLoader />
            </Flex>
          </>
        ) : (
          <>
            {items.map((product) => (
              <Card
                title={product.title}
                imageURL={product.img}
                code={product.code}
                size={product.size}
                id={product._id}
              />
            ))}
          </>
        )}
      </Flex>
    </VStack>
  );
};

export default Featured;
