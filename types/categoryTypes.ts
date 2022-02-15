export interface CategoryType {
    conCategory1: conCategory1;
}

export interface conCategory1 {
    id: number;
    name: string;
    discountRate: number;
    imageUrl: string;
    conCategory2s: conCategory2s[];
}

export interface conCategory2s {
    id: number;
    name: string;
    conCategory1Id: number;
    imageUrl: string;
    conItems: conItems[];
}

export interface conItems {
    id: number;
    name: string;
    originalPrice: number;
    minSellingPrice: number;
    count: number;
    imageUrl: string;
}
