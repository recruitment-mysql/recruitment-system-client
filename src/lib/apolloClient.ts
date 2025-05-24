// src/lib/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://localhost:4003/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    console.log('Token sent to GraphQL:', token);
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;