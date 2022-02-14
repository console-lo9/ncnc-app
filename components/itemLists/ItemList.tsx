import axios from 'axios';
import useAxios from 'hooks/useAxios';
import Items from 'pages/items';
import React, { useEffect, useState } from 'react';
import { BrandType, conCategories } from 'types/items';

const ItemList: React.FC<conCategories> = (props) => {
    const [brandItems, setBrandItems] = useState([]);

    //   임시 브랜드리스트는 스타벅스로
    const brandId = props.conCategoryId;

    useEffect(() => {
        const fetchData = async () => {
            const { data }: any = await axios.get(
                `https://api2.ncnc.app/con-category1s/${brandId}/nested`,
            );

            const conCategory1 = await data.conCategory1;
            const brandItems = await conCategory1.conCategory2s;

            setBrandItems(brandItems);
        };

        fetchData();
    }, []);

    console.log(brandItems);

    return (
        <ul>
            {brandItems.map((item: BrandType) => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <h2>{item.conCategory1Id}</h2>
                    <img src={item.imageUrl} alt={item.name} />
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
