import gql from "graphql-tag";

import { Resolvers } from "@/types/graphql-schema";

export const mutationTypeDefs = gql`
  type Mutation {
    """
    Returns \`true\` if the server is ready to accept mutations.
    """
    pong: Boolean!
  }
`;

const mutationResolvers = {
  Mutation: {
    pong: () => true,
  },
} satisfies Resolvers;

export default mutationResolvers;
