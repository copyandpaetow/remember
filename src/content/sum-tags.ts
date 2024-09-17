import type { Entry } from "./types";

export const sumTags = (
  tagsAccumulator: Record<string, Entry[]>,
  entry: Entry
) => {
  entry.data.tags.forEach((tag) => {
    tagsAccumulator[tag] = (tagsAccumulator[tag] ?? []).concat(entry);
  });
  return tagsAccumulator;
};
