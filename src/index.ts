import Server from './server';

const port = normalizePort(process.env.PORT || 3000);
Server.set('port', port);

Server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

function normalizePort(val: number | string): number | string | boolean {
  const port: number = typeof val === 'string' ? parseInt(val, 10) : val;
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  } else {
    return false;
  }
}

// import express from 'express';
// import GraphHTTP from 'express-graphql';
// import Schema from './schema';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use('/graphql', GraphHTTP({
//   schema: Schema,
//   pretty: true,
//   graphiql: true
// }));

// app.listen(port, function() {
//   console.log(`Server running on http://localhost:${port}/`);
// });

export default Server;
