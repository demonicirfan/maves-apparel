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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [size, setSize] = useState('');
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('');
  const [featured, setFeatured] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef();

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
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleFeatured = () => {
    setFeatured(!featured);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let databody = {
      title: title,
      imgURL: url,
      code: code,
      size: size,
      category: category,
      featured: featured,
    };

    setTitle('');
    setSize('');
    setUrl('');
    setCode('');
    setCategory('');
    setFeatured(false);

    const res = await fetch('/api/v1/products', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return console.log(data);
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
          mt={{ sm: 4, md: 16, lg: 20 }}
          p={{ sm: 5, md: 5, lg: 10 }}
        >
          <Box p={4} w={['md', 'md', 'xl']}>
            <VStack spacing={8}>
              <VStack alignItems={'center'}>
                <Heading>Add Product</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                  Add all the details of Product
                </Text>
              </VStack>
              <WrapItem>
                <Box bg='white' w={['sm', 'sm', 'md']}>
                  <Box m={8} color='gray.900'>
                    <VStack spacing={5}>
                      <form action='submit' onSubmit={handleSubmit}>
                        <FormControl isRequired id='name' mb={'4'}>
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
                        <FormControl isRequired id='url' mb={'4'}>
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
                        <FormControl isRequired id='size' mb={'4'}>
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
                        <FormControl id='category' mb={'4'}>
                          <FormLabel>Category</FormLabel>
                          <InputGroup mb={'4'}>
                            <Select
                              placeholder='Select category'
                              onChange={handleCategory}
                              value={category}
                              variant='outline'
                              borderColor={'gray.200'}
                              py={'2'}
                            >
                              <option value='gloves'>Gloves</option>
                              <option value='tshirt'>T-shirt</option>
                              <option value='polo'>Polo</option>
                              <option value='hoodies'>Hoodie</option>
                              <option value='tracksuits'>TrackSuit</option>
                              <option value='activewear'>ActiveWear</option>
                              <option value='knitwear'>Knitwear</option>
                              <option value='shorts'>Shorts</option>
                            </Select>
                          </InputGroup>
                        </FormControl>
                        <FormControl id='name' mb={'4'}>
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
                        <FormControl id='name' my={'5'}>
                          <InputGroup borderColor='#E0E1E7'>
                            <Checkbox
                              size={'lg'}
                              spacing='1rem'
                              borderColor={'gray.200'}
                              isChecked={featured}
                              onChange={handleFeatured}
                            >
                              Add to Featured
                            </Checkbox>
                          </InputGroup>
                        </FormControl>
                        <FormControl id='name' float='right' mb={'4'}>
                          <Button
                            variant='solid'
                            bg='gray.900'
                            rounded={'0'}
                            color='white'
                            _active={{
                              backgroundColor: 'green',
                            }}
                            _hover={{
                              backgroundColor: 'green',
                            }}
                            type='submit'
                            onClick={onOpen}
                          >
                            Add Product
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </VStack>
          </Box>
        </Box>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent bg={'white'} rounded={'0'}>
          <ModalHeader color={'gray.900'}>Done</ModalHeader>
          <ModalCloseButton color={'gray.900'} rounded={'0'} border='none' />
          <ModalBody color={'green.600'} fontSize={'xl'}>
            Product Submitted Successfully
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              bg={'gray.900'}
              rounded={'0'}
              _active={{
                backgroundColor: 'gray.500',
              }}
              _hover={{
                backgroundColor: 'gray.500',
                shadow: 'md',
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
export default Contact;
