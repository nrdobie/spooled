/******************
 * Filament Types *
 ******************/
import client from "@/libs/prisma/client";

import brands from "./seed/brands";
import commonColors from "./seed/common-colors";
import filamentTypes from "./seed/filament-types";
import filaments from "./seed/filaments";
import spools from "./seed/spools";

async function seed() {
  // Add filament types
  try {
    for (const filamentType of filamentTypes) {
      await client.filamentType.create({
        data: filamentType,
      });
    }
    console.log("Successfully seeded filament types.");
  } catch (error) {
    console.log("An error occurred while seeding filament types: ", error);
  }

  try {
    await client.brand.createMany({
      data: brands,
    });
    console.log("Successfully seeded brands.");
  } catch (error) {
    console.log("An error occurred while seeding brands: ", error);
  }

  try {
    await client.commonColor.createMany({
      data: commonColors,
    });
    console.log("Successfully seeded common colors.");
  } catch (error) {
    console.log("An error occurred while seeding common colors: ", error);
  }

  try {
    for (const filament of filaments) {
      await client.filament.create({
        data: filament,
      });
    }
    console.log("Successfully seeded filaments.");
  } catch (error) {
    console.log("An error occurred while seeding filaments: ", error);
  }

  try {
    for (const spool of spools) {
      await client.spool.create({
        data: spool,
      });
    }
    console.log("Successfully seeded spools.");
  } catch (error) {
    console.log("An error occurred while seeding spools: ", error);
  }
}

seed();
