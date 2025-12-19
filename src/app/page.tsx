'use client';

import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

import styled from 'styled-components';
import TaskBoard from '@/components/TaskBoard';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3002/graphql' }),
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <TaskBoard />
      </Wrapper>
    </ApolloProvider>
  );
}

const Wrapper = styled.section`
  //background: papayawhip;
`;
