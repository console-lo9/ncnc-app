import Link from 'next/link';
import React from 'react';
import * as Styled from '../Brand/styled';
import { DealItemProps } from './types';

const Deal: React.FC<{ onDealItems: DealItemProps[] }> = ({ onDealItems }) => {
    return (
        <Styled.ItemsHolder>
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
        </Styled.ItemsHolder>
    );
};

export default Deal;
