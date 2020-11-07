import gql from 'graphql-tag';
import client from './client';

// needs checked for single value by id
export const valueQuery = gql`{
  values {
    id
    time
    sensor
    data
  }
}
`;

// gets data from single sensor by id
export const sensorQuery = gql`
  query sensorQuery($id: ID!) {
  sensor(id: $id){
    id
    name
    readings {
      id
      time 
      data
    }
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

