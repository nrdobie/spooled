import { createId } from "@paralleldrive/cuid2";
import { Prisma } from "@prisma/client";

const filamentTypes = [
  // ABS
  {
    id: createId(),
    shortName: "ABS",
    longName: "Acrylonitrile Butadiene Styrene",
  },
  // PLA
  {
    id: createId(),
    shortName: "PLA",
    longName: "Polylactic Acid",
    subtypes: {
      createMany: {
        data: [
          {
            id: createId(),
            name: "Basic",
            defaultSubtype: true,
          },
          {
            id: createId(),
            name: "Silk",
          },
          {
            id: createId(),
            name: "Wood",
          },
          {
            id: createId(),
            name: "Metal",
          },
          {
            id: createId(),
            name: "Glow in the Dark",
          },
          {
            id: createId(),
            name: "Transparent",
          },
          {
            id: createId(),
            name: "Matte",
          },
          {
            id: createId(),
            name: "Tough",
          },
          {
            id: createId(),
            name: "Marble",
          },
          {
            id: createId(),
            name: "Glitter",
          },
          {
            id: createId(),
            name: "Gradient",
          },
          {
            id: createId(),
            name: "Dual Color",
          },
        ],
      },
    },
  },
  // PETG
  {
    id: createId(),
    shortName: "PETG",
    longName: "Polyethylene Terephthalate Glycol",
    subtypes: {
      createMany: {
        data: [
          {
            id: createId(),
            name: "Basic",
            defaultSubtype: true,
          },
          {
            id: createId(),
            name: "Translucent",
          },
        ],
      },
    },
  },
  // TPU
  {
    id: createId(),
    shortName: "TPU",
    longName: "Thermoplastic Polyurethane",
  },
  // TPE
  {
    id: createId(),
    shortName: "TPE",
    longName: "Thermoplastic Elastomer",
  },
  // PA6
  {
    id: createId(),
    shortName: "PA6",
    longName: "PA6 (Nylon 6)",
  },
  // PA6-CF
  {
    id: createId(),
    shortName: "PA6-CF",
    longName: "Carbon Fiber Reinforced PA6 (Nylon 6)",
  },
  //PAHT-CF
  {
    id: createId(),
    shortName: "PAHT-CF",
    longName: "Carbon Fiber Reinforced High-Temperature Nylon",
  },
  // PC
  {
    id: createId(),
    shortName: "PC",
    longName: "Polycarbonate",
  },
  // PVA
  {
    id: createId(),
    shortName: "PVA",
    longName: "Polyvinyl Alcohol",
  },
  // HIPS
  {
    id: createId(),
    shortName: "HIPS",
    longName: "High Impact Polystyrene",
  },
  // ASA
  {
    id: createId(),
    shortName: "ASA",
    longName: "Acrylonitrile Styrene Acrylate",
  },
  // PLA-CF
  {
    id: createId(),
    shortName: "PLA-CF",
    longName: "Carbon Fiber Reinforced PLA",
  },
  // PETG-CF
  {
    id: createId(),
    shortName: "PETG-CF",
    longName: "Carbon Fiber Reinforced PETG",
  },
  //PET
  {
    id: createId(),
    shortName: "PET",
    longName: "Polyethylene Terephthalate",
  },
  //PET-CF
  {
    id: createId(),
    shortName: "PET-CF",
    longName: "Carbon Fiber Reinforced PET",
  },
] satisfies Prisma.FilamentTypeCreateInput[];

export default filamentTypes;
