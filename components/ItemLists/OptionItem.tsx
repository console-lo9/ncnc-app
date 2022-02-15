import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { optionActions } from 'store';
import { get3DigitsCost, getExpiryDate, getSaleRate } from 'utils/functions';
import { OptionItemProps } from './types/option-item';

import * as Styled from './styled/option-item';

const OptionItem = ({
    option,
    originalPrice,
    setSelectedOption,
}: OptionItemProps) => {
    const saleRate: number = getSaleRate(originalPrice, option.sellingPrice);
    const expiryDate: string = getExpiryDate(option.expireAt);
    const sellingPrice: string = get3DigitsCost(option.sellingPrice);

    const dispatch = useDispatch();
    const onClick = () => {
        const printText = `${expiryDate} 까지 / ${sellingPrice}원`;
        dispatch(optionActions.changeOpenState(false));
        setSelectedOption(printText);
    };

    return (
        <Fragment>
            <Styled.Button onClick={onClick}>
                <Styled.OptionDiv>
                    <Styled.InfoDiv>
                        <Styled.ExpiryDiv>
                            <Styled.CateName>유효기간 </Styled.CateName>
                            <Styled.CateDesc>{expiryDate} 까지</Styled.CateDesc>
                        </Styled.ExpiryDiv>
                        <Styled.SectionDiv>
                            <Styled.CateName>할인가 </Styled.CateName>
                            <Styled.SaleDesc>{sellingPrice}원</Styled.SaleDesc>
                        </Styled.SectionDiv>
                    </Styled.InfoDiv>
                    <Styled.SaleDiv>{saleRate} %</Styled.SaleDiv>
                </Styled.OptionDiv>
            </Styled.Button>
        </Fragment>
    );
};
export default OptionItem;
