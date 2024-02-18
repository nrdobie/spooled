import filamentTypes from "../filament-types";

export default function findFilamentSubtypeId(shortName: string, subtypeName: string): string {
  const filamentType = filamentTypes.find((filamentType) => filamentType.shortName === shortName);
  if (!filamentType) {
    throw new Error(`Filament type not found: ${shortName}`);
  }
  const subtype = filamentType.subtypes?.createMany.data.find((subtype) => subtype.name === subtypeName);
  if (!subtype) {
    throw new Error(`Filament subtype not found: ${subtypeName}`);
  }
  return subtype.id;
}
