import type { Entry, Content } from "@content/types";
import { removeNestedFolder } from "./remove-nested-folder";

export const addName = (entry: Entry): Content => ({
  ...entry,
  name: removeNestedFolder(entry.slug),
});

export const sumTags = (
  tagsAccumulator: Record<string, Content[]>,
  entry: Content
) => {
  entry.data.tags.forEach((tag) => {
    const unNestedTag = removeNestedFolder(tag);

    tagsAccumulator[unNestedTag] = (tagsAccumulator[unNestedTag] ?? []).concat(
      entry
    );
  });
  return tagsAccumulator;
};

export const normalizeCollection = (entries: Entry[]) => {
  return entries.map(addName).reduce(sumTags, {});
};


// for the dynamic content we need an array structure like [{params: {...}, props: {...}, ...]
// for the folder we need a nested tree like structure => this is also the only time we need the tested tags
// for the most recent /recently updated we need the base array