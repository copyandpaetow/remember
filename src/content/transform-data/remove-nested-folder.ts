export const removeNestedFolder = (slug: string): string => {
    return slug.split("/").at(-1) as string
}