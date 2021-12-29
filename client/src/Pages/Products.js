import { Heading, Flex, VStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Product/Card';

const Product = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    try {
      fetch(`/api/v1/products/${id}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => {
          setItem(jsonResponse.getProduct);
          console.log(jsonResponse.getProduct);
        });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <VStack direction={'row'} maxW={'6xl'} mx={'auto'} bg={'FAF9F8'}>
      <Text color={'black'} fontSize={['2xl', '4xl']} mx={'auto'} my={'8'}>
        Featured
      </Text>
      <Flex wrap={'wrap'} justifyContent={'space-around'}>
        <Card
          title={item.title}
          imageURL={item.img}
          code={item.code}
          size={item.size}
        />
      </Flex>
    </VStack>
  );
};

export default Product;
