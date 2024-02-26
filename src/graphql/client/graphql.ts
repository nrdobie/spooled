/* eslint-disable */
import { Json } from '@/types/json';
import { JsonObject } from '@/types/json';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  JSON: { input: Json; output: Json; }
  JSONObject: { input: JsonObject; output: JsonObject; }
};

export type Brand = {
  __typename?: 'Brand';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type CreateBrandInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBrand: Brand;
  deleteBrand: Brand;
  /** Returns `true` if the server is ready to accept mutations. */
  pong: Scalars['Boolean']['output'];
  updateBrand: Brand;
};


export type MutationCreateBrandArgs = {
  data: CreateBrandInput;
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBrandArgs = {
  data: UpdateBrandInput;
};

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<Brand>;
  brands: Array<Brand>;
  /** Returns `true` if the server is ready to accept requests. */
  healthCheck: Scalars['Boolean']['output'];
};


export type QueryBrandArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateBrandInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type AdminBrandsDeleteQueryVariables = Exact<{
  brandId: Scalars['ID']['input'];
}>;


export type AdminBrandsDeleteQuery = { __typename?: 'Query', brand?: { __typename?: 'Brand', id: string, name: string } | null };

export type AdminBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminBrandsQuery = { __typename?: 'Query', brands: Array<(
    { __typename?: 'Brand', id: string }
    & { ' $fragmentRefs'?: { 'Admin_Brands_BrandCard_BrandFragment': Admin_Brands_BrandCard_BrandFragment } }
  )> };

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', healthCheck: boolean };

export type Admin_Brands_BrandCard_BrandFragment = { __typename?: 'Brand', id: string, name: string, website?: string | null } & { ' $fragmentName'?: 'Admin_Brands_BrandCard_BrandFragment' };

export const Admin_Brands_BrandCard_BrandFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin_Brands_BrandCard_Brand"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<Admin_Brands_BrandCard_BrandFragment, unknown>;
export const AdminBrandsDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminBrandsDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"brandId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"brandId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AdminBrandsDeleteQuery, AdminBrandsDeleteQueryVariables>;
export const AdminBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminBrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin_Brands_BrandCard_Brand"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin_Brands_BrandCard_Brand"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<AdminBrandsQuery, AdminBrandsQueryVariables>;
export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"healthCheck"}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;