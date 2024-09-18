import type { CollectionEntry } from "astro:content";

export type Entry = CollectionEntry<"articles">;
export type Content = Entry & {
    name: string
}

export type Folders = Record<string, Entry[]>;