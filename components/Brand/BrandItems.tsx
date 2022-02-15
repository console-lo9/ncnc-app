import useAxios from 'hooks/useAxios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { ConCategory1, ConCategory2s, ConItems } from 'types/items';
import * as Styled from './styled';

export interface BrandItemsProp {
    conCategoryId: number;
    brandId: number;
}

const BrandItems: React.FC<BrandItemsProp> = ({ conCategoryId, brandId }) => {
    const [brandItems, setBrandItems] = useState<ConItems[]>();
    const selectedBrand = useSelector(
        (state: RootState) => state.brand.selectedBrand,
    );

    const fetchData = useAxios<{ conCategory1: ConCategory1 }>(
        `https://api2.ncnc.app/con-category1s/${conCategoryId}/nested`,
    );

    const brandList: ConCategory2s[] = fetchData?.conCategory1?.conCategory2s!;

    useEffect(() => {
        if (brandList) {
            setBrandItems(brandList[selectedBrand].conItems);
        }
    }, [brandList, conCategoryId]);

    if (!brandItems) {
        return <div>Loading...</div>;
    }

    return (
        <Styled.ItemsHolder>
            {brandItems?.map((item) => (
                <li key={item.id}>
                    <Link href={`/items/${item.id}`}>
                        <Styled.ItemInfoWrapper>
                            <div>
                                <Styled.ItemImage src={item.imageUrl} />
                            </div>
                            <Styled.InfoRight>
                                <Styled.SellingPrice>
                                    <b>{item.name}</b>
                                </Styled.SellingPrice>
                                <Styled.InfoBottom>
                                    <Styled.DiscountRate>
                                        {Math.ceil(
                                            100 *
                                                (1 -
                                                    item.minSellingPrice /
                                                        item.originalPrice),
                                        )}
                                        %
                                    </Styled.DiscountRate>
                                    <Styled.SellingPrice>
                                        {item.minSellingPrice.toLocaleString()}
                                        원
                                    </Styled.SellingPrice>
                                    <Styled.OriginalPrice>
                                        <s>
                                            {item.originalPrice.toLocaleString()}
                                            원
                                        </s>
                                    </Styled.OriginalPrice>
                                </Styled.InfoBottom>
                            </Styled.InfoRight>
                        </Styled.ItemInfoWrapper>
                    </Link>
                </li>
            ))}
        </Styled.ItemsHolder>
    );
};

export default BrandItems;
