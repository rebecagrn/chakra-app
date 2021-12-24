import type { NextPage } from 'next';
import { Container, Flex, VStack } from '@chakra-ui/react';
import Details from './src/components/Details';
import Cart from './src/components/Cart';
import Header from './src/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Container maxW="container.xl" p={0}>
        <Header />
        <Flex
          h={{ base: 'auto', md: '90vh' }}
          py={[0, 10, 20]}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
