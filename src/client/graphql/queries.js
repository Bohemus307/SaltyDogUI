import gql from 'graphql-tag';
import client from './client';

// needs checked for single value by id
export const valueQuery = gql`
 query valueQuery($id: ID!) {
  value(reading_id: $id){
   reading
   reading_id
   correlateid
   date
   time
  }
 }
`;

export const alertQuery = gql`
 query alertQuery($id: ID!) {
  alert(sensor_id: $id){
    sensor_id
    settingsid
    maxsetvalue
    minsetvalue
    dateset
  }
 }
`;

export const sensorQuery = gql`
  query sensorQuery($id: ID!) {
  sensor(correlateid: $id){
   correlateid
   sensor_id
   sensorname
   location
   values {
     reading_id
     correlateid
     reading
     time
     date
   }
  }
}
`;

export const weekOfDataQuery = gql`
  query weekQuery($id: ID!) {
  sensor(correlateid: $id){
   correlateid
   sensor_id
   sensorname
   location
   weekOfValues {
     reading_id
     correlateid
     reading
     time
     date
   }
  }
}
`;

export const monthOfDataQuery = gql`
  query monthQuery($id: ID!) {
  sensor(correlateid: $id){
   correlateid
   sensor_id
   sensorname
   location
   monthOfValues {
     reading_id
     correlateid
     reading
     time
     date
   }
  }
}
`;

export const exportDataQuery = gql`
  query exportDataQuery($id: ID!, $start: Float, $end: Float) {
  sensor(correlateid: $id, start: $start, end: $end){
   correlateid
   sensor_id
   sensorname
   location
   exportValues {
     reading_id
     correlateid
     reading
     time
     date
   }
  }
}
`;

export const getSensors = gql`{
    sensors {
      correlateid
      sensorname
      sensor_id
    }
}
`;

export const getAlerts = gql`{
  alerts {
    sensor_id
    settingsid
    maxsetvalue
    minsetvalue
    dateset
  }
}
`;

export const createAlert = gql`
  mutation CreateAlert($input: CreateAlertInput!) {
    alert: createAlert(input: $input) {
      sensor_id
      settingsid
      maxsetvalue
      minsetvalue
    }
  }
`;

export const updateAlert = gql`
  mutation updateAlert($input: UpdateAlertInput!) {
    alert: updateAlert(input: $input) {
      sensor_id
      settingsid
      maxsetvalue
      minsetvalue
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
