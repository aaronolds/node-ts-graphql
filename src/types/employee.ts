import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';

class EmployeeType {
    public type = new GraphQLObjectType({
        name: 'EmployeeType',
        fields: {
          empId: { type: GraphQLInt },
          firstName: { type: new GraphQLNonNull(GraphQLString) }
        }
      });
}

export default new EmployeeType().type;
