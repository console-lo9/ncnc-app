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
                            <DiscountRate>
                                {Math.ceil(
                                    100 *
                                        (1 -
                                            item.minSellingPrice /
                                                item.originalPrice),
                                )}
                                %
                            </DiscountRate>
                            <span>{item.minSellingPrice}</span>
                            <span>
                                <s>{item.originalPrice}</s>
                            </span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

const ItemImage = styled.img`
    width: 70px;
    height: 70px;
`;

const DiscountRate = styled.span`
    color: #f75656;
    font-size: 16px;
    magin-right: 10px;
`;
export default BrandItems;
