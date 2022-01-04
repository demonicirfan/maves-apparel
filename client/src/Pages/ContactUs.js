import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export default function contact() {
  return (
    <Container
      bg='white'
      maxW='full'
      pt={16}
      centerContent
      overflow='hidden'
      minH={'95vh'}
    >
      <Flex my={'auto'}>
        <Box
          bg='gray.900'
          color='white'
          m={{ sm: 0, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <VStack alignItems={['center', 'flex-start']} spacing={'8'}>
                  <Box>
                    <Heading fontFamily={'Italiana'} fontSize={['2xl', '3xl']}>
                      Contact
                    </Heading>
                    <Text color='gray.500' fontSize={['sm', 'md', 'md']}>
                      Fill up the form to contact
                    </Text>
                  </Box>
                  <VStack
                    w={'full'}
                    alignItems={['start', 'start']}
                    spacing={[2, 3]}
                  >
                    <Button
                      size='md'
                      height='48px'
                      width='fit-content'
                      variant='ghost'
                      color='#FAF9F8'
                      fontWeight={'400'}
                      textAlign={'start'}
                      _hover={{ outline: '2px solid #FAF9F8' }}
                      leftIcon={<MdPhone color='#FAF9F8' size='20px' />}
                    >
                      +91-988888888
                    </Button>
                    <Button
                      size='md'
                      height='48px'
                      width='fit-content'
                      variant='ghost'
                      fontWeight={'400'}
                      color='#FAF9F8'
                      _hover={{ outline: '2px solid #FAF9F8' }}
                      leftIcon={<MdEmail color='#FAF9F8' size='20px' />}
                    >
                      info@mavesapparel.com
                    </Button>
                  </VStack>
                  <HStack align={'flex-start'} px={['2', '4']} w={'full'}>
                    <Icon w='30px' h='30px'>
                      <MdLocationOn color='#FAF9F8' size='20px' />
                    </Icon>
                    <VStack spacing={2} alignItems='flex-start'>
                      <Text>71-75 Shelton Street,</Text>
                      <Text>Covent Garden,</Text>
                      <Text>London</Text>
                      <Text>WC2H 9JQ</Text>
                      <Text>United Kingdom</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
                    <VStack spacing={5}>
                      <FormControl id='name'>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<BsPerson color='gray.800' />}
                          />
                          <Input type='text' size='md' />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor='#E0E1E7'>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<MdOutlineEmail color='gray.800' />}
                          />
                          <Input type='text' size='md' />
                        </InputGroup>
                      </FormControl>
                      <FormControl id='name'>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor='gray.300'
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder='message'
                        />
                      </FormControl>
                      <FormControl id='name' float='right'>
                        <Button
                          rounded={'0'}
                          variant='solid'
                          bg='gray.900'
                          color='white'
                          fontWeight={'400'}
                          _hover={{
                            backgroundColor: 'gray.600',
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
