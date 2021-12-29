import { Flex, VStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from './FeaturedCard.js';

const Featured = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      fetch('/api/v1/products/?featured=true')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => {
          setItems(jsonResponse.getFeaturedProducts);
          console.log(jsonResponse.getFeaturedProducts);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <VStack direction={'row'} maxW={'6xl'} mx={'auto'} bg={'FAF9F8'}>
      <Text color={'black'} fontSize={['2xl', '4xl']} mx={'auto'} my={'8'}>
        Featured
      </Text>
      <Flex wrap={'wrap'} justifyContent={'space-around'}>
        {items.map((product) => (
          <Card
            title={product.title}
            imageURL={product.img}
            code={product.code}
            size={product.size}
            id={product._id}
          />
        ))}
      </Flex>
    </VStack>
  );
};

export default Featured;
