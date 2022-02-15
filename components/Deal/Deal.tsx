import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import * as Styled from '../Brand/styled';
import { DealItemProps } from './types';

const Deal: React.FC<{ onDealItems: DealItemProps[] }> = ({ onDealItems }) => {
    return (
        <DealContainer>
            <TitleDiv>
                <div>
                    <WarnDiv>놓치지 마세요</WarnDiv>
                    <TodaySaleDiv>오늘의 땡처리콘!</TodaySaleDiv>
                </div>
            </TitleDiv>
            <ItemsHolder>
                {onDealItems.map((item) => (
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
                                            {Math.round(
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
            </ItemsHolder>
        </DealContainer>
    );
};
const DealContainer = styled.section``;
const TitleDiv = styled.div`
    display: flex;
    width: 100%;
    padding-left: 20px;
    margin-bottom: 14px;
`;
const WarnDiv = styled.div`
    font-size: 14px;
    color: red;
    margin-bottom: 5px;
`;
const TodaySaleDiv = styled.div`
    font-size: 16px;
    font-weight: 700;
`;
const ItemsHolder = styled(Styled.ItemsHolder)`
    margin-top: 0px;
`;
export default Deal;
