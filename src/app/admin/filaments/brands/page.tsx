import Link from "next/link";

import query from "@/graphql/apollo/query";
import { graphql } from "@/graphql/client";
import BrandCard from "@/segments/brands/admin/blocks/brand-card";

const ADMIN_BRANDS_QUERY = graphql(/* GraphQL */ `
  query AdminBrands {
    brands {
      id
      ...Admin_Brands_BrandCard_Brand
    }
  }
`);

type AdminFilamentsBrandsPageProps = Readonly<{}>;

export default async function AdminFilamentsBrandsPage({}: AdminFilamentsBrandsPageProps) {
  const { data, error } = await query(ADMIN_BRANDS_QUERY);

  if (error) {
    throw error;
  }

  return (
    <div>
      <h1 className="mb-4 flex items-center justify-between text-2xl font-bold">
        Filaments Brands
        <Link href="/admin/filaments/brands/create" className="btn btn-primary">
          Create Brand
        </Link>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {data.brands.map((brand) => {
          return <BrandCard data={brand} key={brand.id} />;
        })}
      </div>
    </div>
  );
}
