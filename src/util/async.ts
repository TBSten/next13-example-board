
export const filterAsync = async <T>(arr: T[], filter: (item: T) => Promise<boolean>) => {
    const filteredPromises = await Promise.all(
        arr.map(filter)
    )
    return arr.filter((_, i) => filteredPromises[i])
}
