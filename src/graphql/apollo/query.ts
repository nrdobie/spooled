import { QueryOptions, TypedDocumentNode } from "@apollo/client";
import type { OperationVariables } from "@apollo/client/core/types";

import apolloClient from "@/graphql/apollo/client";

export default function query<TData, TVariables extends OperationVariables = OperationVariables>(
  query: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: Omit<QueryOptions<TVariables, TData>, "query" | "variables">,
) {
  return apolloClient.query<TData, TVariables>({
    query,
    variables,
    ...options,
  });
}
