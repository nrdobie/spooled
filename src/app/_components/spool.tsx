import { Spool } from "@/app/_fetchers/get-spools";

type SpoolProps = {
  spool: Spool;
};

export default function Spool({ spool }: SpoolProps) {
  return (
    <div>
      <p>{spool.filament.brand.name} <strong>{spool.filament.color}</strong></p>
      <p className="text-3xl font-bold">{spool.filament.filamentType.shortName}</p>
      <p>{spool.filament.filamentTypeSubtype?.name ?? 'Basic'}</p>
    </div>
  );
}
