import brands from "../brands";

export default function findBrandId(name: string): string {
  const id = brands.find((brand) => brand.name === name)?.id;
  if (!id) {
    throw new Error(`Brand not found: ${name}`);
  }
  return id;
}
