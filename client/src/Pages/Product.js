import {
  Flex,
  VStack,
  Text,
  HStack,
  Center,
  Image,
  Heading,
  Box,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Card from '../components/Featured/FeaturedCard';

const Product = () => {
  const [item, setItem] = useState([]);
  const [items, setItems] = useState([]);
  const { category, id } = useParams();
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
      fetch(`/api/v1/products/?category=${item.category}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => {
          for (var i = jsonResponse.getProducts.length - 1; i >= 0; i--) {
            if (jsonResponse.getProducts[i] === item._id) {
              jsonResponse.getProducts.splice(i, 1);
            }
          }
          const firstSixItems = jsonResponse.getProducts.slice(0, 6);
          setItems(firstSixItems);
          console.log(firstSixItems);
        });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <VStack
      direction={'row'}
      maxW={'6xl'}
      mx={'auto'}
      bg={'#FAF9F8'}
      mt={'16'}
      pt={'16'}
    >
      <Stack
        align={'flex-start'}
        spacing={['8', '16']}
        direction={{ base: 'column', md: 'row' }}
      >
        <Center maxW={['250px', '400px']} m='auto'>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: `${item.img}`,
                //srcSet: this.srcSet,
                sizes:
                  '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
              },
              largeImage: {
                src: `${item.img}`,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </Center>
        <VStack spacing={'8'} align={'flex-start'} pt={'8'}>
          <Text textTransform={'capitalize'} size={('3xl', '2xl')}>
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
              <Text fontSize={['sm', 'xl']} noOfLines={'4'}>
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
      <VStack
        direction={'row'}
        maxW={'6xl'}
        mx={'auto'}
        bg={'FAF9F8'}
        my={'16'}
      >
        <Text color={'black'} fontSize={['2xl', '4xl']} mx={'auto'} my={'8'}>
          Other Similar Items
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
        <Text
          bg='black'
          color={'white'}
          rounded={'full'}
          px={'4'}
          py={'2'}
          mb={'4'}
        >
          View more
        </Text>
      </VStack>
      );
    </VStack>
  );
};

export default Product;
