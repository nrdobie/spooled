import { startServerAndCreateNextHandler } from "@as-integrations/next";

import graphqlServer from "@/graphql/apollo/server";

const handler = startServerAndCreateNextHandler(graphqlServer);

export { handler as GET, handler as POST };
