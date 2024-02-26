import { faArrowUpRightFromSquare } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { FragmentType, getFragmentData, graphql } from "@/graphql/client";

const BRAND_CARD_FRAGMENT = graphql(/* GraphQL */ `
  fragment Admin_Brands_BrandCard_Brand on Brand {
    id
    name
    website
  }
`);

type BrandCardProps = Readonly<{
  data: FragmentType<typeof BRAND_CARD_FRAGMENT>;
}>;

export default function BrandCard({ data }: BrandCardProps) {
  const brand = getFragmentData(BRAND_CARD_FRAGMENT, data);

  return (
    <div className="card border border-base-content/20 shadow">
      <div className="card-body">
        <h2 className="card-title flex items-center justify-between">
          {brand.name}
          <Link href={`/admin/filaments/brands/${brand.id}`} className="btn btn-outline btn-primary btn-sm">
            View
          </Link>
        </h2>
        <p className="text-sm opacity-60">{brand.id}</p>
        <dl className="[&>dd]:ml-4 [&>dt]:font-bold">
          <dt>Website</dt>
          <dd>
            {brand.website !== null ? (
              <a href={brand.website} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                {brand.website} <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
              </a>
            ) : (
              <span>No Website Provided</span>
            )}
          </dd>
        </dl>
        <div className="card-actions mt-4 justify-end">
          <Link href={`/admin/filaments/brands/${brand.id}/edit`} className="btn btn-primary btn-sm">
            Edit
          </Link>
          <Link href={`/admin/filaments/brands/${brand.id}/delete`} className="btn btn-error btn-sm">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
