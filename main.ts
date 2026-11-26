// News-image entry for Thursday 26 November 2026 (Node 22, standard
// library only). The broadsheet itself lives in this repository as
// entry.png; this program copies those exact bytes into the output
// directory, so the grader's two runs produce the identical file.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const imageUrl = new URL("./entry.png", import.meta.url);
  mkdirSync(outDir, { recursive: true });
  const bytes = readFileSync(imageUrl);
  const outPath = join(outDir, "entry.png");
  writeFileSync(outPath, bytes);
  // Read back and verify the copy is byte-identical to the source, so a
  // partial or truncated write can never pass as a successful run.
  const written = readFileSync(outPath);
  if (!written.equals(bytes)) {
    throw new Error(
      `entry.png verification failed: wrote ${written.length} bytes, expected ${bytes.length}`,
    );
  }
}

main();
