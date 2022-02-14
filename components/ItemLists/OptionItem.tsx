import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Option } from 'types/itemTypes';
import { get3DigitsCost, getExpiryDate, getSaleRate } from 'utils/functions';
import { useDispatch } from 'react-redux';
import { optionActions, selectedItemActions } from 'store';

const OptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-shrink: 0;
    border: 1px solid gray;
    border-radius: 4px;
    margin: 5px;
`;
const SectionDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
const CateName = styled.div`
    margin-right: 4px;
`;
const OptionItem = ({
    id,
    option,
    originalPrice,
}: {
    id: string;
    option: Option;
    originalPrice: number;
}) => {
    const saleRate: number = getSaleRate(originalPrice, option.sellingPrice);
    const expiryDate: string = getExpiryDate(option.expireAt);
    const sellingPrice: string = get3DigitsCost(option.sellingPrice);

    const dispatch = useDispatch();
    const onClick = () => {
        const printText = `${expiryDate} 까지 / ${sellingPrice}원`;
        dispatch(optionActions.changeOpenState(false));
        dispatch(selectedItemActions.changeItemState(printText));
    };

    return (
        <Fragment>
            <button id={id} onClick={onClick}>
                <OptionDiv>
                    <div>
                        <SectionDiv>
                            <CateName>유효기간 </CateName>
                            <div>{expiryDate} 까지</div>
                        </SectionDiv>
                        <SectionDiv>
                            <CateName>할인가 </CateName>
                            <div>{sellingPrice}원</div>
                        </SectionDiv>
                    </div>
                    <div>{saleRate} %</div>
                </OptionDiv>
            </button>
        </Fragment>
    );
};
export default OptionItem;
