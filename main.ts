// Crumbly — entry for "The Worst App Idea Ever Pitched" (make.fun).
// Writes one sentence (<= 240 chars) pitching the worst app imaginable
// to /output/entry.txt. Deterministic: same output on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Crumbly is a $9.99/month app that photographs your toast each morning, predicts the exact angle it will land butter-side down, and texts the result to your grandmother, because breakfast deserves a 47-point butter-risk report.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
