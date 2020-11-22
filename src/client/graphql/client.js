import {
  ApolloClient, ApolloLink, HttpLink, InMemoryCache, split,
} from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { getAccessToken, isLoggedIn } from '../Components/Auth/auth';

const httpUrl = 'http://localhost:3030/graphql';
const wsUrl = 'ws://localhost:3030/graphql';

const httpLink = ApolloLink.from([
  new ApolloLink((operation, forward) => {
    const token = getAccessToken();
    if (token) {
      operation.setContext({ headers: { authorization: `Bearer ${token}` } });
    }
    return forward(operation);
  }),
  new HttpLink({ uri: httpUrl, credentials: 'include' }),
]);

const wsLink = new WebSocketLink({
  uri: wsUrl,
  options: {
    connectionParams: () => ({
      accesstoken: getAccessToken(),
    }),
    lazy: true,
    reconnect: true,
  },
});

const isSubscription = (operation) => {
  const definition = getMainDefinition(operation.query);
  return definition.kind === 'OperationDefinition'
    && definition.operation === 'subscription';
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: split(isSubscription, wsLink, httpLink),
  defaultOptions: { query: { fetchPolicy: 'no-cache' } },
});

// alternate fetch example for testing

// const graphQlRequest = async (query, variables = {}) => {
//   const request = {
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({query, variables})
//   };
//   if (isLoggedIn()) {
//     request.headers['authorization'] = 'Bearer ' + getAccessToken();
//   }
//   const response = await fetch(endpointUrl, request);
//   const reponseBody = await response.json();
//   if (reponseBody.errors) {
//     const message = reponseBody.errors.map((error) => error.message).join('\n');
//     throw new Error(message)
//   }
//   return reponseBody.data;
// }

export default client;
