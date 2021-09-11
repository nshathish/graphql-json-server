import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schemas';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3001, () => console.log('server started...'));
