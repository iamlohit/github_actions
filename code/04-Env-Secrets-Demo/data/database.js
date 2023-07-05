import { MongoClient } from 'mongodb';

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

// The above variables after .env.xx are the variables that can change based on the environment they are used in.
// i.e. The values can be different for Dev env vs Prod env.
// These are the env variables that we will demo in the workflow used with this REST API based project.
// Here we are using the following:
  // MONGODB_CLUSTER_ADDRESS
  // MONGODB_USERNAME
  // MONGODB_PASSWORD
  // MONGODB_DB_NAME

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;
