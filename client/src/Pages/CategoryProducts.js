import { Flex, VStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Featured/FeaturedCard';

const CategoryProducts = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    try {
      fetch(`/api/v1/products/?category=${category}`)
        .then((res) => {
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
  }, []);

  return (
    <VStack direction={'row'} maxW={'6xl'} mx={'auto'} bg={'FAF9F8'}>
      <Text color={'black'} fontSize={['2xl', '4xl']} mx={'auto'} my={'8'}>
        Featured
      </Text>
      <Flex wrap={'wrap'} justifyContent={'space-around'}>
        {items.map((item) => (
          <Card
            title={item.title}
            imageURL={item.img}
            code={item.code}
            size={item.size}
            id={item._id}
          />
        ))}
      </Flex>
    </VStack>
  );
};

export default CategoryProducts;
