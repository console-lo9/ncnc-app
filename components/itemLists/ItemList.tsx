import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BrandType, ImageProps } from 'types/items';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const ItemList: React.FC<{
    conCategoryId: number;
}> = ({ conCategoryId }) => {
    const [brandItems, setBrandItems] = useState([]);

    //   임시 브랜드리스트는 스타벅스로

    useEffect(() => {
        const fetchData = async () => {
            const { data }: any = await axios.get(
                `https://api2.ncnc.app/con-category1s/${conCategoryId}/nested`,
            );

            const conCategory1 = await data.conCategory1;
            const brandItems = await conCategory1.conCategory2s;

            setBrandItems(brandItems);
        };

        fetchData();
    }, []);

    return (
        <section>
            {brandItems.map((item: BrandType) => (
                <BrandLi key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.id}</p>
                    <a href={`/brands/${item.id}`}>
                        <BrandImage src={item.imageUrl} alt={item.name} />
                    </a>
                </BrandLi>
            ))}
        </section>
    );
};

export default ItemList;

const BrandLi = styled.li`
    list-style: none;
`;

const BrandImage = styled.img`
    border-radius: 50%;

    width: 100px;
    height: 100px;
`;
