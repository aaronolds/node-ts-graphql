import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import type from './types/employee';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is our Item query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world'
    },
    goodBye: {
      type: GraphQLString,
      resolve: () => 'good night'
    },
    employee: {
        type: type,
        description: 'The employee object',
        // args: {
        //     key: {type: new GraphQLNonNull(GraphQLString)}
        // },
        resolve: () => {
            return {
                empId: 1,
                firstName: 'test'
            };
        }
    }
  }
  //   () => {
  //     return {};
  //   }
  // fields: () => {
  //   return {
  //       users: {
  //       type: new GraphQLList(UserType),
  //       args: UserArgs,
  //       resolve(root, args) {
  //         const opts = { where: args };
  //         return UserModel.findAll(opts);
  //       }
  //     }
  //   };
  // }
});

export default Query;