import React from 'react';
import { Box, Heading, Stack, Image, Text } from '@chakra-ui/react';
import Slider from 'react-slick';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const cards = [
    {
      title: 'Design Projects 1',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2018&q=80',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1579664531470-ac357f8f8e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={['400px', '440px', '600px']}
      width={'full'}
      overflow={'hidden'}
      mt={['64px', '64px', '93px']}
    >
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box key={index} text-align='center' overflow={'hidden'}>
            <Image
              src={card.image}
              fit={'cover'}
              minH={['400px','440px']}
              maxH={'600px'}
              maxW={'8xl'}
              w={'full'}
              mx={'auto'}
            />

            <Stack
              spacing={6}
              w={'full'}
              // maxW={'full'}
              position='absolute'
              top='50%'
              transform='translate(0, -50%)'
            >
              <Heading
                color={'white'}
                fontFamily={'Poppins'}
                fontWeight={'900'}
                letterSpacing={'tight'}
                textAlign={'center'}
                lineHeight={['80px', '110px']}
                fontSize={{ base: '85px', md: '9xl', lg: '10xl' }}
                mx={'auto'}
                sx={{ animation: '1s ease-out 0s 1 slideInLeft' }}
              >
                Maves Apparel
              </Heading>
              {/* <Text
                fontSize={{ base: 'md', lg: 'lg' }}
                color={'white'}
                bg={'black'}
                textAlign={'center'}
              >
                {card.text}
              </Text> */}
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
