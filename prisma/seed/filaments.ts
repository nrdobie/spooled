import { createId } from "@paralleldrive/cuid2";
import { Prisma } from "@prisma/client";

import findBrandId from "./utils/find-brand-id";
import findCommonColorId from "./utils/find-common-color-id";
import findFilamentSubtypeId from "./utils/find-filament-subtype-id";
import findFilamentTypeId from "./utils/find-filament-type-id";

const filaments: Prisma.FilamentCreateInput[] = [
  {
    id: createId(),
    color: "Black",
    colorHex: "#000000",
    weight: 1,
    diameter: 1.75,
    link: "https://us.store.bambulab.com/products/abs-filament?variant=40475105460360",
    nozzleMinTemp: 240,
    nozzleMaxTemp: 270,
    bedMinTemp: 80,
    bedMaxTemp: 100,
    brand: {
      connect: {
        id: findBrandId("Bambu Lab"),
      },
    },
    filamentType: {
      connect: {
        id: findFilamentTypeId("ABS"),
      },
    },
    commonColor: {
      connect: {
        id: findCommonColorId("Black"),
      },
    },
  },
  {
    id: createId(),
    color: "Black",
    colorHex: "#000000",
    weight: 1,
    diameter: 1.75,
    link: "https://us.store.bambulab.com/collections/pla/products/pla-basic-filament?variant=41078274654344",
    nozzleMinTemp: 190,
    nozzleMaxTemp: 230,
    bedMinTemp: 35,
    bedMaxTemp: 45,
    brand: {
      connect: {
        id: findBrandId("Bambu Lab"),
      },
    },
    filamentType: {
      connect: {
        id: findFilamentTypeId("PLA"),
      },
    },
    filamentTypeSubtype: {
      connect: {
        id: findFilamentSubtypeId("PLA", "Basic"),
      },
    },
    commonColor: {
      connect: {
        id: findCommonColorId("Black"),
      },
    },
  },
  {
    id: createId(),
    color: "Bambu Green",
    colorHex: "#16C344",
    weight: 1,
    diameter: 1.75,
    link: "https://us.store.bambulab.com/collections/pla/products/pla-basic-filament?variant=41135419228296",
    nozzleMinTemp: 190,
    nozzleMaxTemp: 230,
    bedMinTemp: 35,
    bedMaxTemp: 45,
    brand: {
      connect: {
        id: findBrandId("Bambu Lab"),
      },
    },
    filamentType: {
      connect: {
        id: findFilamentTypeId("PLA"),
      },
    },
    filamentTypeSubtype: {
      connect: {
        id: findFilamentSubtypeId("PLA", "Basic"),
      },
    },
    commonColor: {
      connect: {
        id: findCommonColorId("Green"),
      },
    },
  },
  {
    id: createId(),
    color: "Gray",
    colorHex: "#8E9089",
    weight: 1,
    diameter: 1.75,
    link: "https://us.store.bambulab.com/collections/pla/products/pla-basic-filament?variant=41211562819720",
    nozzleMinTemp: 190,
    nozzleMaxTemp: 230,
    bedMinTemp: 35,
    bedMaxTemp: 45,
    brand: {
      connect: {
        id: findBrandId("Bambu Lab"),
      },
    },
    filamentType: {
      connect: {
        id: findFilamentTypeId("PLA"),
      },
    },
    filamentTypeSubtype: {
      connect: {
        id: findFilamentSubtypeId("PLA", "Basic"),
      },
    },
    commonColor: {
      connect: {
        id: findCommonColorId("Gray"),
      },
    },
  },
  {
    id: createId(),
    color: "Ash Gray",
    colorHex: "#9B9EA0",
    weight: 1,
    diameter: 1.75,
    link: "https://us.store.bambulab.com/products/pla-matte-filament?variant=40489681813640",
    nozzleMinTemp: 190,
    nozzleMaxTemp: 230,
    bedMinTemp: 35,
    bedMaxTemp: 45,
    brand: {
      connect: {
        id: findBrandId("Bambu Lab"),
      },
    },
    filamentType: {
      connect: {
        id: findFilamentTypeId("PLA"),
      },
    },
    filamentTypeSubtype: {
      connect: {
        id: findFilamentSubtypeId("PLA", "Matte"),
      },
    },
    commonColor: {
      connect: {
        id: findCommonColorId("Gray"),
      },
    },
  },
  {
    id: createId(),
    color: "Gold",
    colorHex: "#E5B03D",
    weight: 1,
    diameter: 1.75,
    link: "https://us.store.bambulab.com/products/pla-silk?variant=41126614368392",
    nozzleMinTemp: 210,
    nozzleMaxTemp: 240,
    bedMinTemp: 35,
    bedMaxTemp: 45,
    brand: {
      connect: {
        id: findBrandId("Bambu Lab"),
      },
    },
    filamentType: {
      connect: {
        id: findFilamentTypeId("PLA"),
      },
    },
    filamentTypeSubtype: {
      connect: {
        id: findFilamentSubtypeId("PLA", "Silk"),
      },
    },
    commonColor: {
      connect: {
        id: findCommonColorId("Yellow"),
      },
    },
  },
];

export default filaments;
