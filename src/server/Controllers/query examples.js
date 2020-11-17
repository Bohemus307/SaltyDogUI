// gets single user
// query userQuery($id: ID!) {
//   user(id: $id) {
//     id
//     userName
//     email
//     password
//   }
// }

// gets you data from single sensor by id
// query sensorQuery($id: ID!) {
//   sensor(correlateid: $id){
//    correlateid
//    sensor_id
//    location
//    values {
//      correlateid
//      reading
//      time
//      date
//    }
//   }
// }

// create user
// mutation CreateUser($input: CreateUserInput) {
//   user: createUser(input: $input) {
//     username
//     email
//     companyId
//     password
//  }
// }

// create Sensor
// mutation CreateSensor($input: CreateSensorInput) {
//   user: createSensor(input: $input) {
//    sensorname
//    location
//    correlateid
//   }
//  }

// get value by id
// query valueQuery($id: ID!) {
//   value(reading_id: $id){
//     reading
//    reading_id
//    correlateid
//    date
//    time
//   }
// }
