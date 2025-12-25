'use client';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

import styled from 'styled-components';
import TaskBoard from '@/components/TaskBoard';

const graphqlUri =
  process.env.NEXT_PUBLIC_GRAPHQL_URI || 'http://localhost:3002/graphql';

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
  }),
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
