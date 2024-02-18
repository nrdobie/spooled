import { createId } from "@paralleldrive/cuid2";
import { Prisma } from "@prisma/client";

import findFilamentId from "./utils/find-filament-id";

const spools: Prisma.SpoolCreateInput[] = [
  {
    id: createId(),
    filament: {
      connect: {
        id: findFilamentId("Bambu Lab", "ABS", null, "Black"),
      },
    },
  },
  {
    id: createId(),
    filament: {
      connect: {
        id: findFilamentId("Bambu Lab", "PLA", "Basic", "Black"),
      },
    },
  },
  {
    id: createId(),
    filament: {
      connect: {
        id: findFilamentId("Bambu Lab", "PLA", "Basic", "Bambu Green"),
      },
    },
  },
  {
    id: createId(),
    filament: {
      connect: {
        id: findFilamentId("Bambu Lab", "PLA", "Basic", "Gray"),
      },
    },
  },
  {
    id: createId(),
    filament: {
      connect: {
        id: findFilamentId("Bambu Lab", "PLA", "Matte", "Ash Gray"),
      },
    },
  },
  {
    id: createId(),
    filament: {
      connect: {
        id: findFilamentId("Bambu Lab", "PLA", "Silk", "Gold"),
      },
    },
  },
];

export default spools;
