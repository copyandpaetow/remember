
export const tagToUrl = (tag: string): string => {
    return tag.replaceAll(" ", "-")
}


export const removeFolderFromSlug = (slug: string): string => {
    return slug.split("/").at(-1) as string
}