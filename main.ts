// SPDX-License-Identifier: MIT
// One Line, One Laugh -- deterministic entry writer.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate survivors: silence plan / hold music (kept), returned-silence packaging,
// alarm "in solidarity". The winner turns on one word and needs no setup.
const ENTRY =
  "I called to cancel my silence subscription. The hold music was excellent.";

if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error("entry violates the 1..200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
