import React, { MouseEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { selectBrandActions } from 'store';

import { BrandType } from 'types/items';
import styled from '@emotion/styled';
import Link from 'next/link';

const ItemList: React.FC<{
    conCategoryId: number;
}> = ({ conCategoryId }) => {
    const dispatch = useDispatch();
    const [brandItems, setBrandItems] = useState([]);

    const checkBrandHandler = (event: MouseEvent) => {
        const selectBrand = Number(event.currentTarget.id);
        dispatch(selectBrandActions.brand(selectBrand));
    };

    const fetchData = async () => {
        const { data }: any = await axios.get(
            `https://api2.ncnc.app/con-category1s/${conCategoryId}/nested`,
        );

        const conCategory1 = await data.conCategory1;
        const brandItems = await conCategory1.conCategory2s;

        setBrandItems(brandItems);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            {brandItems.map((item: BrandType, index: number) => {
                return (
                    <BrandLi key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.id}</p>
                        <Link href={`/brands/${item.id}`}>
                            <BrandImage
                                id={index.toString()}
                                src={item.imageUrl}
                                alt={item.name}
                                onClick={checkBrandHandler}
                            />
                        </Link>
                    </BrandLi>
                );
            })}
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
