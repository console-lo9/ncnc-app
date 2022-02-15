export interface ItemType {
    conItem: ConItem;
}

export interface ConItem {
    id: number;
    name: string;
    originalPrice: number;
    minSellingPrice: number;
    ncSellingPrice: number;
    information: string | null;
    tip: null;
    warning: string;
    discountRate: number;
    info: null;
    isOnlyAccount: number;
    conCategory2Id: number;
    imageUrl: string;
    conCategory2: ConCategory2;
    options: Option[];
}

export interface ConCategory2 {
    id: number;
    name: string;
    adminUserId: number;
    priority: number;
    createdAt: string;
    conCategory1Id: number;
    info: string;
    imageUrl: string;
    conCategory1: ConCategory1;
}

export interface ConCategory1 {
    id: number;
    name: string;
    createdAt: string;
    priority: number;
    discountRate: number;
    info: string;
    imageUrl: string;
}

export interface Option {
    expireAt: string;
    count: number;
    sellingPrice: number;
}
