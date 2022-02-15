import Link from 'next/link';
import { BrandItemsProp } from './types';

import * as Styled from './styled';
import { Fragment } from 'react';

const BrandItems: React.FC<BrandItemsProp> = ({ conItems }) => {
    return (
        <Fragment>
            <Styled.CountItem>{conItems.length}개의 상품</Styled.CountItem>
            <Styled.ItemsHolder>
                {conItems.map((item) => (
                    <Styled.List key={item.id}>
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
                    </Styled.List>
                ))}
            </Styled.ItemsHolder>
        </Fragment>
    );
};

export default BrandItems;
