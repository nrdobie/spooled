import { createId } from "@paralleldrive/cuid2";
import { Prisma } from "@prisma/client";

const brands: Prisma.BrandCreateInput[] = [
  {
    id: createId(),
    name: "Bambu Lab",
    website: "https://bambulab.com/",
  },
  {
    id: createId(),
    name: "Inland",
    website: "https://www.microcenter.com/",
  },
  {
    id: createId(),
    name: "Hatchbox",
    website: "https://www.hatchbox3d.com/",
  },
  {
    id: createId(),
    name: "Amazon Basics",
    website: "https://www.amazon.com/",
  },
  {
    id: createId(),
    name: "Flashforge",
    website: "https://www.flashforge.com/",
  },
  {
    id: createId(),
    name: "Sunlu",
    website: "https://www.sunlu.com/",
  },
];

export default brands;
