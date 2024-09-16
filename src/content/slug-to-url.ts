
export const slugToUrl = (slug: string): string => {
    return slug.replaceAll(" ", "-")
}

export const urlToSlug = (url: string): string => {
    return url.replaceAll("-", " ")
}