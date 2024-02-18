import Sqids from "sqids";

const sqids = new Sqids({
  minLength: 6,
  alphabet: "vmgtprd2ax46escfy9357zubkwnq8hj",
});

export function encodeHumanId(index: number) {
  return sqids.encode([index]);
}

export function decodeHumanId(humanId: string) {
  return sqids.decode(humanId)[0];
}
