import gql from "graphql-tag";

import { Resolvers } from "@/types/graphql-schema";

export const queryTypeDef = gql`
  type Query {
    """
    Returns \`true\` if the server is ready to accept requests.
    """
    healthCheck: Boolean!
  }
`;

const queryResolvers = {
  Query: {
    healthCheck: () => true,
  },
} satisfies Resolvers;

export default queryResolvers;
