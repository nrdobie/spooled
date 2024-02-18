import { DateResolver, DateTimeResolver, JSONObjectResolver, JSONResolver } from "graphql-scalars";
import gql from "graphql-tag";

export const scalarsTypeDef = gql`
  scalar Date
  scalar DateTime
  scalar JSON
  scalar JSONObject
`;

const scalarsResolvers = {
  Date: DateResolver,
  DateTime: DateTimeResolver,
  JSON: JSONResolver,
  JSONObject: JSONObjectResolver,
};

export default scalarsResolvers;
