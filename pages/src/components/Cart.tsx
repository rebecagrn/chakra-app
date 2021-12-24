import {
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondarycolor = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgcolor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{' '}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio w={24} ratio={1}>
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
        <Stack
          direction="row"
          spacing={0}
          w="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack spacing={0} w="full" alignItems="stretch">
            <Heading size="md">Naruto</Heading>
            <Text color={secondarycolor}>Anime HQ</Text>
          </VStack>
          <Heading size="sm" textAlign="left">
            $119.90
          </Heading>
        </Stack>
      </HStack>
      <HStack justifyContent="space-between" w="full">
        <Heading size="sm">Subtotal</Heading>
        <Text color={secondarycolor}>$119.90</Text>
      </HStack>
      <HStack justifyContent="space-between" w="full">
        <Heading size="sm">Shipping</Heading>
        <Text color={secondarycolor}>$10</Text>
      </HStack>
      <HStack justifyContent="space-between" w="full">
        <Heading size="sm">Coupon</Heading>
        <Text color={secondarycolor}>empty</Text>
      </HStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondarycolor}>Total</Text>
        <Heading size="sm">$129.90</Heading>
      </HStack>
    </VStack>
  );
}

export default Cart;
