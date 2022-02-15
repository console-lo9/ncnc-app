import { ConCategory2 } from 'types/itemTypes';

export interface DealItemProps {
    id: number;
    name: string;
    originalPrice: number;
    createdAt: string;
    sfId: string;
    minSellingPrice: number;
    ncSelligPrice: string | null;
    tip: string | null;
    warning: string;
    discountRate: number;
    askingPrice: number;
    isRefuse: number;
    isBlock: number;
    info: string | null;
    isOnlyAccount: number;
    conCategory2Id: number;
    imageUrl: string;
    conCategory2: ConCategory2;
}
