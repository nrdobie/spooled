import { notFound } from "next/navigation";

import { AdminFilamentsBrandsProps } from "@/app/admin/filaments/brands/[brandId]/params";
import query from "@/graphql/apollo/query";
import { graphql } from "@/graphql/client";

const ADMIN_BRANDS_DELETE_QUERY = graphql(/* GraphQL */ `
  query AdminBrandsDelete($brandId: ID!) {
    brand(id: $brandId) {
      id
      name
    }
  }
`);

export default async function AdminFilamentsBrandDeletePage(props: AdminFilamentsBrandsProps) {
  const { data, error } = await query(ADMIN_BRANDS_DELETE_QUERY, {
    brandId: props.params.brandId,
  });

  if (error) {
    throw error;
  }

  if (!data.brand) {
    notFound();
  }

  return (
    <div className="max-w-prose">
      <h1 className="text-2xl font-bold">Delete {data.brand.name}</h1>
      <p className="text-lg">
        Are you sure you want to delete {data.brand.name}? This action cannot be undone. And will remove all associated
        filaments.
      </p>
    </div>
  );
}
