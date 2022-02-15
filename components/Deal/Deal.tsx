import React from 'react';
import Link from 'next/link';

import { DealItemProps } from './types';

import * as Styled from '../Brand/styled';
import styled from '@emotion/styled';

const Deal: React.FC<{ onDealItems: DealItemProps[] }> = ({ onDealItems }) => {
    return (
        <DealContainer>
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

const ItemsHolder = styled(Styled.ItemsHolder)`
    margin-top: 0px;
`;
export default Deal;
