import gql from 'graphql-tag';
import {
  ApolloClient, ApolloLink, HttpLink, InMemoryCache,
} from 'apollo-boost';
import { getAccessToken, isLoggedIn } from './Components/Auth/auth';

const endpointUrl = 'http://localhost:3030/graphql';

const authLink = new ApolloLink((operation, forward) => {
  if (isLoggedIn()) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    new HttpLink({ uri: endpointUrl }),
  ]),
  cache: new InMemoryCache(),
});

const userDetailFragment = gql`
  fragment userDetail on User {
    username
    email
    companyId
    password
  }
`;

// gets user data by id
const userQuery = gql`
  query userQuery($id: ID!) {
    user(id: $id ) {
      ...userDetail
    }
  }
  ${userDetailFragment}
`;

// needs checked for single value by id
const valueQuery = gql`{
  value {
    id
    time
    sensor
    data
  }
}
`;

// gets data from single sensor by id
const sensorQuery = gql`query sensorQuery($id: ID!) {
  sensor(id: $id){
  id
    readings {
      id
      data
    }
  }
}
`;

const createUserMutation = gql`mutation CreateUser($input: CreateUSerInput) {
  user: createUser(input: $input) {
    ...userDetail
  }
  ${userDetailFragment}
}
`;

export const loadValue = async (id) => {
  const { data: { value } } = await client.query({ query: valueQuery, variables: { id } });
  return value;
};

export const loadSensorData = async (id) => {
  const { data: { sensor } } = await client.query({ query: sensorQuery, variables: { id } });
  return sensor;
};

export const createUser = async (input) => {
  const { data: { user } } = await client.mutate({
    mutation: createUserMutation,
    variables: { input },
    update: (cache, { data }) => {
      cache.writeQuery({
        query: userQuery,
        variables: { id: data.user.id },
        data,
      });
    },
  });
  return user;
};

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
