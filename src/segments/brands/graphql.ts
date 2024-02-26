import { Prisma } from "@prisma/client";
import gql from "graphql-tag";

import client from "@/libs/prisma/client";
import { Resolvers } from "@/types/graphql-schema";

export const brandTypeDefs = gql`
  type Brand {
    id: ID!
    name: String!
    website: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  extend type Query {
    brand(id: ID!): Brand
    brands: [Brand!]!
  }

  input CreateBrandInput {
    id: ID
    name: String!
    website: String
  }

  input UpdateBrandInput {
    id: ID!
    name: String
    website: String
  }

  extend type Mutation {
    createBrand(data: CreateBrandInput!): Brand!
    updateBrand(data: UpdateBrandInput!): Brand!
    deleteBrand(id: ID!): Brand!
  }
`;

const brandResolvers = {
  Query: {
    brand: (_parent, args) => {
      return client.brand.findUnique({ where: { id: args.id } });
    },
    brands: () => {
      return client.brand.findMany();
    },
  },
  Mutation: {
    createBrand: (_parent, args) => {
      const newBrand: Prisma.BrandCreateInput = {
        id: args.data.id ?? undefined,
        name: args.data.name,
        website: args.data.website,
      };

      return client.brand.create({ data: newBrand });
    },
    updateBrand: () => {
      throw new Error("Resolver not implemented");
    },
    deleteBrand: () => {
      throw new Error("Resolver not implemented");
    },
  },
} satisfies Resolvers;

export default brandResolvers;
