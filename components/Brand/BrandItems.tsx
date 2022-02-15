import styled from '@emotion/styled';
import axios from 'axios';
import useAxios from 'hooks/useAxios';
import { useEffect, useState } from 'react';
import { BrandType, ConCategory1, ConCategory2s, ConItems } from 'types/items';

export interface BrandItemsProp {
    conCategoryId: number;
    brandId: number;
}

const BrandItems: React.FC<BrandItemsProp> = ({ conCategoryId, brandId }) => {
    const [brandItems, setBrandItems] = useState<ConItems[]>();
    const fetchData = useAxios<{ conCategory1: ConCategory1 }>(
        `https://api2.ncnc.app/con-category1s/${conCategoryId}/nested`,
    );

    const brandList: ConCategory2s[] = fetchData?.conCategory1?.conCategory2s!;

    useEffect(() => {
        if (brandList) {
            setBrandItems(brandList[0].conItems);
        }
    }, [brandList]);

    console.log(brandItems);
    return (
        <ul>
            {brandItems?.map((item) => (
                <li key={item.id}>
                    <div>
                        <ItemImage src={item.imageUrl} />
                    </div>
                    <div>
                        <div>
                            <b>{item.name}</b>
                        </div>
                        <div>
                            <span>
                                {item.minSellingPrice / item.originalPrice}
                            </span>
                            <span>{item.minSellingPrice}</span>
                            <span>{item.originalPrice}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

const ItemImage = styled.img`
    width: 50px;
    height: 50px;
`;
export default BrandItems;
