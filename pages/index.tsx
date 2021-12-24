import type { NextPage } from 'next';
import { Container, Flex, VStack } from '@chakra-ui/react';
import Details from './src/components/Details';
import Cart from './src/components/Cart';

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
