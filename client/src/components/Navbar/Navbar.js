import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { RiMenu2Line } from 'react-icons/ri';
import logo from '../../Images/Logo.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const _bg = '#FAF9F8';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box
      bg={_bg}
      as='header'
      position='fixed'
      w={'100%'}
      zIndex={'2'}
      top={'0'}
    >
      <Flex
        minH={['70px', '70px', '93px']}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.900'}
        align={'center'}
        justify={'space-between'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color={'black'} w={4} h={4} />
              ) : (
                <RiMenu2Line size={28} color={'black'} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'end', md: 'start' }}
          maxW={'6xl'}
          mx={'auto'}
          pr={['0', '0', '28']}
        >
          <Image
            src={logo}
            alt='logo'
            width={20}
            onClick={() => {
              navigate('/home');
            }}
          />
          <Flex display={{ base: 'none', md: 'flex' }} mx={'auto'}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('black.600', 'gray.800');
  const linkHoverColor = useColorModeValue('gray.800', 'gray.600');

  return (
    <Stack direction={'row'} spacing={8} alignItems={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <RouterLink to={navItem.href ?? '#'}>
                <ChakraLink
                  p={2}
                  fontSize={'lg'}
                  fontWeight={'300'}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </ChakraLink>
              </RouterLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent bg={_bg} color='gray.600' mx={'2'}>
                <Stack border={'1px'}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <RouterLink to={href} reloadDocument>
      <ChakraLink role={'group'} display={'block'} p={2}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'black' }}
              fontWeight={300}
            >
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'gray.600'} w={6} h={6} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </ChakraLink>
    </RouterLink>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={_bg} color={'black'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <RouterLink to={href ?? '#'}>
        <Flex
          py={0}
          as={ChakraLink}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text fontWeight={5300} color={'gray.700'}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </RouterLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <RouterLink key={child.label} to={child.href} reloadDocument>
                <ChakraLink py={2} fontWeight={'300'}>{child.label}</ChakraLink>
              </RouterLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: 'home',
  },
  {
    label: 'About',
    href: 'About',
  },
  {
    label: 'Products',
    children: [
      {
        label: 'Gloves',
        href: 'gloves',
      },
      {
        label: 'T-Shirts',
        href: 'tshirt',
      },
      {
        label: 'Polo',
        href: 'polo',
      },
      {
        label: 'Hoodies',
        href: 'hoodies',
      },
      {
        label: 'Tracksuits',
        href: 'tracksuits',
      },
      {
        label: 'Jeans',
        href: 'jeans',
      },
      {
        label: 'Shoes',
        href: 'shoes',
      },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];
