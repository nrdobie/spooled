import filamentTypes from "../filament-types";

export default function findFilamentTypeId(shortName: string): string {
  const id = filamentTypes.find((filamentType) => filamentType.shortName === shortName)?.id;
  if (!id) {
    throw new Error(`Filament type not found: ${shortName}`);
  }
  return id;
}
