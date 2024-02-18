import { createId } from "@paralleldrive/cuid2";
import { Prisma } from "@prisma/client";

const commonColors: Prisma.CommonColorCreateInput[] = [
  { id: createId(), name: "Black", hexCode: "#000000" },
  { id: createId(), name: "Gray", hexCode: "#808080" },
  { id: createId(), name: "White", hexCode: "#FFFFFF" },
  { id: createId(), name: "Red", hexCode: "#FF0000" },
  { id: createId(), name: "Pink", hexCode: "#FFC0CB" },
  { id: createId(), name: "Orange", hexCode: "#FFA500" },
  { id: createId(), name: "Yellow", hexCode: "#FFFF00" },
  { id: createId(), name: "Green", hexCode: "#008000" },
  { id: createId(), name: "Blue", hexCode: "#0000FF" },
  { id: createId(), name: "Purple", hexCode: "#800080" },
  { id: createId(), name: "Brown", hexCode: "#753801" },
];

export default commonColors;
