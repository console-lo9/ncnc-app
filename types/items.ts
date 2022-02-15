import React from 'react';

export interface BrandType {
    conCategory1Id: number;
    conItems: ConItems[];
    id: number;
    imageUrl: string;
    name: string;
}

export interface ImageProps {
    id: number;
    src: string;
    alt: string;
    onClick: React.MouseEventHandler;
}

// 까페, 편의점 등 카테고리 분류
export interface ConCategory1 {
    id: number;
    name: string;
    discountRate: number;
    imgaeUrl: string;
    conCategory2s: ConCategory2s[];
}

// 같은 카테고리 내 브랜드 정보
export interface ConCategory2s {
    id: number;
    name: string;
    conCategory1Id: number;
    imageUrl: string;
    conItems: ConItems[];
}

// 브랜드가 가지고 있는 상품 정보 하나하나
export interface ConItems {
    id: number;
    name: string;
    originalPrice: number;
    minSellingPrice: number;
    count: number;
    imageUrl: string;
}
