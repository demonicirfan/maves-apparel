import { Flex, VStack, Text, Image, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from '../components/Product/Card';
import { useLocation, useParams } from 'react-router-dom';

const Products = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  //get details of {id} product
  useEffect(() => {
    try {
      fetch(`/api/v1/products/${id}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => {
          setItem(jsonResponse);
          console.log(jsonResponse);
        });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <VStack direction={'row'} maxW={'6xl'} mx={'auto'} bg={'FAF9F8'}>
      <HStack spacing={'4'}>
        <Image src='' />
        <HStack spacing={'8'}>
          <Text>{item.title}</Text>
          <Text>{item.size}</Text>
          <Text>#{item.code}</Text>
        </HStack>
      </HStack>

      {/* <Flex wrap={'wrap'} justifyContent={'space-around'}>
        {item.map((product) => (
          <Card
            title={product.title}
            imageURL={product.img}
            code={product.code}
            size={product.size}
          />
        ))}
      </Flex> */}
    </VStack>
  );
};

export default Products;
