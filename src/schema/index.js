import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  printSchema,
  GraphQLList, } from 'graphql';

import Task from './types/task';
import Reservation from './types/Reservation';
  
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    taskMainList: {
      type: new GraphQLList(new GraphQLNonNull(Task)),
      resolve: async (source, args, { pgApi }) => {
        return await pgApi.taskMainList();
      },
    },
    reservationMainList:{
      type: new GraphQLList(new GraphQLNonNull(Reservation)),
      resolve: async (source, args, { pgApi }) => {
        return await pgApi.reservationMainList();
    },
  },
}
});

export const schema = new GraphQLSchema({
  query: QueryType,
});

console.log(printSchema(schema));