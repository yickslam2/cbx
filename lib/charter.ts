import fs from "fs";
import path from "path";

export function getCharterMarkdown(): string {
  const filePath = path.join(process.cwd(), "CHARTER.md");
  return fs.readFileSync(filePath, "utf-8");
}
