import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import Query from './Query';
// import Mutation from './Mutation.js';

const Schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation
});

export default Schema;