import commonColors from "../common-colors";

export default function findCommonColorId(name: string): string {
  const id = commonColors.find((color) => color.name === name)?.id;
  if (!id) {
    throw new Error(`Common color not found: ${name}`);
  }
  return id;
}
