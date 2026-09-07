import fs from "fs";
import path from "path";

function getCharterPath(): string {
  return path.join(process.cwd(), "CHARTER.md");
}

export function getCharterMarkdown(): string {
  return fs.readFileSync(getCharterPath(), "utf-8");
}

export function getCharterLastUpdated(): string {
  const { mtime } = fs.statSync(getCharterPath());
  return new Intl.DateTimeFormat("zh-Hant", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Hong_Kong",
  }).format(mtime);
}
