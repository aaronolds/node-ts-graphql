import express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

class Server {
  // set app to be of type express.Application
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  public config(): void {
    // const config = {
    //   sqldb: {
    //     dialect: 'mssql',
    //     server: 'localhost',
    //     dialectOptions: {
    //       // Not needed if you connect to the default instance
    //       instanceName: 'SQLEXPRESS'
    //     },
    //     database: 'contests',
    //     username: 'graphQL',
    //     password: 'Asdf=4321'
    //   }
    // };

    // if i put this back in the tests succed, but I don't know why...
    // this.app.use('/', function(req, res) {
    //   res.sendStatus(200);
    // });
    this.app.use(
      '/graphql',
      GraphHTTP({
        schema: Schema,
        pretty: true,
        graphiql: true
      })
    );
  }
}

export default new Server().app;
