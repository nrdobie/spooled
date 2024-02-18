import PdfTest from "@/app/_components/pdf-test";
import getSpools from "@/app/_fetchers/get-spools";
import query from "@/graphql/apollo/query";
import { graphql } from "@/graphql/client";

const TEST_QUERY = graphql(/* GraphQL */ `
  query Test {
    healthCheck
  }
`);

export default async function Home() {
  const spools = await getSpools();

  const { data, error } = await query(TEST_QUERY);

  if (error) {
    throw error;
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-semibold">Home</h1>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <PdfTest spools={spools} />
    </main>
  );
}
