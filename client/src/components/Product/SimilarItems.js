import { Flex, Text, VStack, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Card from '../Featured/FeaturedCard';
import ContentLoader from 'react-content-loader';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
let itemCategory;
const BigScreenLoaderProducts = (props) => (
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
    <rect x='13' y='309' rx='0' ry='0' width='275' height='12' />
    <rect x='13' y='341' rx='0' ry='0' width='271' height='25' />
  </ContentLoader>
);
const SmallScreenLoaderProducts = (props) => (
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
    <rect x='1' y='237' rx='0' ry='0' width='244' height='20' />
    <rect x='-1' y='274' rx='0' ry='0' width='244' height='33' />
  </ContentLoader>
);

const SimilarItems = (props) => {
  const [items, setItems] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const navigate = useNavigate();

  console.log('isloadingProducts ' + isLoadingProducts);
  useEffect(() => {
    fetch(`/api/v1/products/?category=${props.category}`)
      .then((res) => {
        setIsLoadingProducts(false);
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        // for (var i = jsonResponse.getProducts.length - 1; i >= 0; i--) {
        //   if (jsonResponse.getProducts[i]._id === Number(item._id, 10)) {
        //     jsonResponse.getProducts.splice(i, 1);
        //   }
        // }
        const firstSixItems = jsonResponse.getProducts.slice(0, 6);
        setItems(firstSixItems);
        itemCategory = firstSixItems[1].category;
        console.log(firstSixItems);
      });
  });

  return (
    <VStack py={'16'} direction={'row'} maxW={'6xl'} mx={'auto'} bg={'FAF9F8'}>
      <Text
        color={'black'}
        fontSize={['2xl', '4xl']}
        mx={'auto'}
        my={'8'}
        fontFamily={'Italiana'}
      >
        Other Similar Items
      </Text>
      <Flex wrap={'wrap'} justifyContent={'space-around'}>
        {isLoadingProducts ? (
          <>
            <Flex display={{ base: 'flex', md: 'none' }} direction='column'>
              <SmallScreenLoaderProducts />
              <SmallScreenLoaderProducts />
              <SmallScreenLoaderProducts />
            </Flex>
            <Flex
              display={{ base: 'none', md: 'flex' }}
              direction='row'
              gap={'16'}
            >
              <BigScreenLoaderProducts />
              <BigScreenLoaderProducts />
              <BigScreenLoaderProducts />
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
      <Button
        rightIcon={<BsArrowRight />}
        bg='black'
        color={'white'}
        rounded={'0'}
        fontWeight={'400'}
        px={'4'}
        mb={'4'}
        onClick={() => {
          navigate(`/${itemCategory}`);
        }}
        _hover={{
          transform: 'translateY(-2px)',
          transition: 'transform 200ms ease-in-out 15ms',
        }}
      >
        View more
      </Button>
    </VStack>
  );
};

export default SimilarItems;
