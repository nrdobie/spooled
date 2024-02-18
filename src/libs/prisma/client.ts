import { PrismaClient } from "@prisma/client";

import cuid2Extension from "@/libs/prisma/extensions/cuid2-extension";
import spoolHumanId from "@/libs/prisma/extensions/spool-human-id";

const client = new PrismaClient().$extends(cuid2Extension).$extends(spoolHumanId);
export default client;
