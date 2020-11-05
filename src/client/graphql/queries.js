import gql from 'graphql-tag';
import client from './client';

// needs checked for single value by id
const valueQuery = gql`{
  values {
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

const sensorConnectSubscription = gql`
  subscription {
    sensorConnect{
      id
      name
      location
      readings
    }
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

export const onMessageAdded = async (handleMessage) => {
  const observable = client.subscribe({ query: sensorConnectSubscription });
  return observable.subscribe(({ data }) => {
    handleMessage(data.messageAdded);
  });
};
