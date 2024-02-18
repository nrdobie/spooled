import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

import schema from "@/graphql/schema";

let plugins: ApolloServerPlugin[];
if (process.env.NODE_ENV === "production") {
  plugins = [];
} else {
  plugins = [
    ApolloServerPluginLandingPageLocalDefault({
      embed: true,
      includeCookies: true,
    }),
  ];
}

const graphqlServer = new ApolloServer({
  schema,
  plugins,
});

export default graphqlServer;
