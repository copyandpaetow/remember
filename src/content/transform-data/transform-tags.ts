
export const tagToUrl = (tag: string): string => {
    return tag.replaceAll(" ", "-")
}


export const removeNestedFolder = (slug: string): string => {
    return slug.split("/").at(-1) as string
}