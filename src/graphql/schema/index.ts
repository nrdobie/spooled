import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import mutationResolvers, { mutationTypeDefs } from "@/graphql/schema/mutation";
import queryResolvers, { queryTypeDef } from "@/graphql/schema/query";
import scalarsResolvers, { scalarsTypeDef } from "@/graphql/schema/scalars";
import brandResolvers, { brandTypeDefs } from "@/segments/brands/graphql";

const schema = makeExecutableSchema({
  typeDefs: [queryTypeDef, mutationTypeDefs, scalarsTypeDef, brandTypeDefs],
  resolvers: merge({}, queryResolvers, mutationResolvers, scalarsResolvers, brandResolvers),
});

export default schema;
