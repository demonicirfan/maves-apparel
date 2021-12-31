import { Flex, VStack, Text, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Featured/FeaturedCard';
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

const CategoryProducts = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    try {
      fetch(`/api/v1/products/?category=${category}`)
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => {
          setItems(jsonResponse.getProducts);
          console.log(jsonResponse.getProducts);
        });
    } catch (err) {
      console.log(err);
    }
  }, [category, setItems]);

  return (
    <VStack minH={'90vh'} direction={'row'} mx={'auto'} bg={'#FAF9F8'}>
      <VStack maxW={'6xl'}>
        <Text
          color={'black'}
          fontSize={['3xl', '4xl']}
          mx={'auto'}
          my={'8'}
          pt={'16'}
          fontFamily={'Italiana'}
          textTransform={'capitalize'}
        >
          {category}
        </Text>
        <Flex wrap={'wrap'} justifyContent={'space-around'} px={['0', '4']}>
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
              {items.map((item) => (
                <Card
                  title={item.title}
                  imageURL={item.img}
                  code={item.code}
                  size={item.size}
                  id={item._id}
                />
              ))}
            </>
          )}
        </Flex>
      </VStack>
    </VStack>
  );
};

export default CategoryProducts;
