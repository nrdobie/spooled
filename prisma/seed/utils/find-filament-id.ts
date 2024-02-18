import filaments from "../filaments";
import findBrandId from "./find-brand-id";
import findFilamentSubtypeId from "./find-filament-subtype-id";
import findFilamentTypeId from "./find-filament-type-id";

export default function findFilamentId(
  brandName: string,
  filamentTypeName: string,
  filamentSubtypeName: string | null,
  colorName: string | null,
): string {
  const brandId = findBrandId(brandName);
  const filamentTypeId = findFilamentTypeId(filamentTypeName);
  const filamentSubtypeId = filamentSubtypeName ? findFilamentSubtypeId(filamentTypeName, filamentSubtypeName) : null;
  const filamentId = filaments.find((filament) => {
    return (
      filament.brand.connect?.id === brandId &&
      filament.filamentType.connect?.id === filamentTypeId &&
      (filamentSubtypeId === null || filament.filamentTypeSubtype?.connect?.id === filamentSubtypeId) &&
      filament.color
    );
  })?.id;

  if (!filamentId) {
    throw new Error(`Filament not found: ${brandName} ${filamentTypeName} ${filamentSubtypeName} ${colorName}`);
  }

  return filamentId;
}
