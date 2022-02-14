export const getSaleRate = (
    originalPrice: number,
    sellingPrice: number,
): number => {
    return Math.round(((originalPrice - sellingPrice) / originalPrice) * 100);
};

export const getExpiryDate = (date: string): string => {
    const dateArray: string[] = date.substring(0, 10).split('-');
    return `${dateArray[0]}.${dateArray[1]}.${dateArray[2]}`;
};

export const get3DigitsCost = (cost: number): string => {
    return cost.toLocaleString();
};
