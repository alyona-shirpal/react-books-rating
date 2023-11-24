import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_API_ENDPOINT } from './config';

const client = new ApolloClient({
  uri: GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache()
});

export default client;
