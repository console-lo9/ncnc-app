import React from 'react';

export interface BrandType {
    conCategory1Id: number;
    conItems?: conItems[];
    id: number;
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

export interface ImageProps {
    id?: number;
    src?: string;
    alt?: string;
    onClick?: React.MouseEventHandler;
}
