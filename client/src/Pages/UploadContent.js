import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [size, setSize] = useState('');
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const sizeChangeHandler = (event) => {
    setSize(event.target.value);
  };
  const urlChangeHandler = (event) => {
    setUrl(event.target.value);
  };
  const codeChangeHandler = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = () => {
    let databody = {
      title: title,
      imgURL: url,
      code: code,
      size: size,
      category: category,
      featured: false,
    };
    return fetch('/api/v1/products', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Container
      bg='gray.100'
      maxW='full'
      centerContent
      overflow='hidden'
      h={'100vh'}
    >
      <Flex m={'auto'}>
        <Box
          bg='gray.900'
          color='white'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4} w={['md', 'md', 'xl']}>
            <VStack spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <VStack alignItems={'center'}>
                  <Heading>Add Product</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                    Add all the details of Product
                  </Text>
                </VStack>
              </WrapItem>
              <WrapItem>
                <Box bg='white' w={['sm', 'sm', 'md']}>
                  <Box m={8} color='gray.900'>
                    <VStack spacing={5}>
                      <FormControl id='name'>
                        <FormLabel>Product Name</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <Input
                            type='text'
                            size='md'
                            value={title}
                            onChange={titleChangeHandler}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id='url'>
                        <FormLabel>URL of Image</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <Input
                            type='url'
                            size='md'
                            value={url}
                            onChange={urlChangeHandler}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id='name'>
                        <FormLabel>Size</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <Input
                            type='text'
                            size='md'
                            value={size}
                            onChange={sizeChangeHandler}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl>
                        <FormLabel>Category</FormLabel>
                        <InputGroup>
                          <Select placeholder='Select option'>
                            <option value='option1'>Gloves</option>
                            <option value='option2'>T-shirt</option>
                            <option value='option3'>Polo</option>
                            <option value='option3'>Hoodie</option>
                            <option value='option3'>TrackSuit</option>
                            <option value='option3'>ActiveWear</option>
                            <option value='option3'>Knitwear</option>
                            <option value='option3'>Shorts</option>
                          </Select>
                        </InputGroup>
                      </FormControl>

                      <FormControl id='name'>
                        <FormLabel>Product Code</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <Input
                            type='text'
                            size='md'
                            value={code}
                            onChange={codeChangeHandler}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id='name'>
                        <InputGroup borderColor='#E0E1E7'>
                          <Checkbox size={'lg'}>Add to Featured</Checkbox>
                        </InputGroup>
                      </FormControl>

                      <FormControl id='name' float='right'>
                        <Button
                          variant='solid'
                          bg='gray.900'
                          rounded={'0'}
                          color='white'
                          _hover={{}}
                        >
                          Add Product
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
export default Contact;
