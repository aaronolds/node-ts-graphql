import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

const EmployeeType = new GraphQLObjectType({
    name: 'EmployeeType',
    fields: {
        empId: {type: GraphQLInt},
        firstName: {type: new GraphQLNonNull(GraphQLString)}
    }
});

export default EmployeeType;
