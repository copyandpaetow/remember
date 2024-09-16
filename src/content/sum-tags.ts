import type { Entry } from "./types";

export const sumTags = (
  tagsAccumulator: Record<string, number>,
  entry: Entry
) => {
  entry.data.tags.forEach((tag) => {
    tagsAccumulator[tag] = (tagsAccumulator[tag] ?? 0) + 1;
  });
  return tagsAccumulator;
};
