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
//   sensor(id: $id){
//   id
//     readings {
//       id
//       data
//     }
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
//      name
//     location
//  }
// }
