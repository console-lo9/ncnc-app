export const getSaleRate = (
    originalPrice: number,
    sellingPrice: number,
): number => {
    return Math.round(((originalPrice - sellingPrice) / originalPrice) * 100);
};

export const getExpiryDate = (date: string): string => {
    if (date.length === 24) {
        const dateArray: string[] = date.substring(0, 10).split('-');
        return `${dateArray[0]}.${dateArray[1]}.${dateArray[2]}`;
    } else {
        const dateArray: string[] = date.split(' ');
        const month = getMonth(dateArray[1]);
        const day = dateArray[2];
        const year = dateArray[3];
        return `${year}.${month}.${day}`;
    }
};

export const get3DigitsCost = (cost: number): string => {
    return cost.toLocaleString();
};

const getMonth = (month: string): string => {
    switch (month) {
        case 'Jan':
            return '01';
        case 'Feb':
            return '02';
        case 'Mar':
            return '03';
        case 'Apr':
            return '04';
        case 'May':
            return '05';
        case 'Jun':
            return '06';
        case 'Jul':
            return '07';
        case 'Aug':
            return '08';
        case 'Sep':
            return '09';
        case 'Oct':
            return '10';
        case 'Nov':
            return '11';
        case 'Dec':
            return '12';
        default:
            return '00';
    }
};
