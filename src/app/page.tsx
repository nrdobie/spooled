import PdfTest from "@/app/_components/pdf-test";
import getSpools from "@/app/_fetchers/get-spools";

export default async function Home() {
  const spools = await getSpools();

  return (
    <main className="p-8">
      <h1 className="text-4xl font-semibold">Home</h1>
      <PdfTest spools={spools} />
    </main>
  );
}
