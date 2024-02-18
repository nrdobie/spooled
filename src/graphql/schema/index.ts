import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import queryResolvers, { queryTypeDef } from "@/graphql/schema/query";
import scalarsResolvers, { scalarsTypeDef } from "@/graphql/schema/scalars";

const schema = makeExecutableSchema({
  typeDefs: [queryTypeDef, scalarsTypeDef],
  resolvers: merge({}, queryResolvers, scalarsResolvers),
});

export default schema;
