import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

app.listen(process.env.PORT);

// The above variables after .env.xx are the variables that can change based on the environment they are used in.
// i.e. The values can be different for Dev env vs Prod env.
// These are the env variables that we will demo in the workflow used with this REST API based project.
// Here we are using the following:
  // PORT