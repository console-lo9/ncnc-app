export interface BrandType {
    conCategory1Id: number;
    conItems?: conItems[];
    id?: number;
    imageUrl?: string;
    name?: string;
}

export interface conItems {
    count: number;
    id: number;
    imageUrl: string;
    minSellingPrice: number;
    name: string;
    originalPrice: number;
}
