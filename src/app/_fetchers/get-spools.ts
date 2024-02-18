import client from "@/libs/prisma/client";

export default function getSpools() {
  return client.spool.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      humanReadableId: true,
      filament: {
        select: {
          color: true,
          id: true,
          nozzleMinTemp: true,
          nozzleMaxTemp: true,
          bedMinTemp: true,
          bedMaxTemp: true,
          brand: {
            select: {
              name: true,
            },
          },
          filamentType: {
            select: {
              shortName: true,
            },
          },
          filamentTypeSubtype: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    take: 10,
  });
}

export type Spools = Awaited<ReturnType<typeof getSpools>>;
export type Spool = Spools[number];
