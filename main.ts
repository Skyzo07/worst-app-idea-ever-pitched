// The Worst App Idea Ever Pitched — entry program.
// Writes one sentence (158 chars) pitching Petflix to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no network, no clock, no randomness. Fails loudly if the
// line is not 1-240 chars or not a single line.
// The line was picked by a 25-candidate internal score plus a CrowLLM panel
// (2 usable verdicts: grok-4.7-fast, minimax-m3.1-flash; combined 141.5/150).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Petflix is a streaming service that plays nature documentaries exclusively for your goldfish, with a premium tier that adds a tiny popcorn bowl it cannot eat.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const len = [...LINE].length;
if (len < 1 || len > 240) {
  throw new Error(`entry line must be 1-240 chars, got ${len}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
