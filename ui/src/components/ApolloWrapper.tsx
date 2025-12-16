"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  // 2. Use 'link' instead of 'uri' directly
  link: new HttpLink({
    uri: "http://localhost:3001/graphql", //backend server GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  // 3. Note: ApolloProvider usually comes from "@apollo/client" directly
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
