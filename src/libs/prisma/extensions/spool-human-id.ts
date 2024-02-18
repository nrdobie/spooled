import { Prisma } from "@prisma/client";
import { produce } from "immer";

import { decodeHumanId, encodeHumanId } from "@/utils/human-id";

const spoolHumanId = Prisma.defineExtension({
  result: {
    spool: {
      humanReadableId: {
        needs: { humanReadableId: true },
        compute({ humanReadableId }) {
          return encodeHumanId(humanReadableId);
        },
      },
    },
  },
  query: {
    spool: {
      $allOperations({ query, args }) {
        const newArgs = produce(args, (draft) => {
          if (!("where" in draft)) {
            return draft;
          }

          if (!("humanReadableId" in draft.where!)) {
            return draft;
          }

          draft.where!.humanReadableId = decodeHumanId(draft.where!.humanReadableId as unknown as string);
        });

        return query(args);
      },
    },
  },
});

export default spoolHumanId;
