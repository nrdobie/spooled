import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import schema from "@/graphql/schema";

const { getClient } = registerApolloClient(() => {
  return new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema }),
  });
});

const apolloClient = getClient() as ApolloClient<NormalizedCacheObject>;

export default apolloClient;
