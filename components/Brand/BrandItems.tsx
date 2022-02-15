import styled from '@emotion/styled';
import axios from 'axios';
import useAxios from 'hooks/useAxios';
import Container from 'layout/Container';
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
        <Container>
            <ItemsHolder>
                {brandItems?.map((item) => (
                    <li key={item.id}>
                        <ItemInfoWrapper>
                            <div>
                                <ItemImage src={item.imageUrl} />
                            </div>
                            <InfoRight>
                                <SellingPrice>
                                    <b>{item.name}</b>
                                </SellingPrice>
                                <InfoBottom>
                                    <DiscountRate>
                                        {Math.ceil(
                                            100 *
                                                (1 -
                                                    item.minSellingPrice /
                                                        item.originalPrice),
                                        )}
                                        %
                                    </DiscountRate>
                                    <SellingPrice>
                                        {item.minSellingPrice.toLocaleString()}
                                        원
                                    </SellingPrice>
                                    <OriginalPrice>
                                        <s>
                                            {item.originalPrice.toLocaleString()}
                                            원
                                        </s>
                                    </OriginalPrice>
                                </InfoBottom>
                            </InfoRight>
                        </ItemInfoWrapper>
                    </li>
                ))}
            </ItemsHolder>
        </Container>
    );
};

export default BrandItems;

export const ItemsHolder = styled.ul``;

export const ItemInfoWrapper = styled.div`
    display: flex;
    padding: 20px 0 20px 30px;
    border-top: 1px solid #eee;
    background-color: #fff;
`;

export const InfoLeft = styled.div``;

export const InfoRight = styled.div`
    padding: 0 20px;
`;

export const InfoBottom = styled.div`
    margin-top: 14px;

    & > span {
        margin-right: 10px;
    }
`;

export const ItemImage = styled.img`
    width: 70px;
    height: 70px;
`;

export const DiscountRate = styled.span`
    color: #f75656;
    font-size: 16px;
    magin-right: 10px;
`;

export const SellingPrice = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

export const OriginalPrice = styled.span`
    color: #999;
`;

export const ItemTitle = styled(SellingPrice)``;
