import React, { Dispatch, Fragment, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Option } from 'types/itemTypes';
import { get3DigitsCost, getExpiryDate, getSaleRate } from 'utils/functions';
import { useDispatch } from 'react-redux';
import { optionActions } from 'store';
const Button = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #eee;
`;
const OptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;
const InfoDiv = styled.div`
    padding: 10px 0px 10px 19px;
    flex-grow: 1;
    text-align: left;
`;
const ExpiryDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;
const SectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const SaleDiv = styled.div`
    font-size: 17px;
    color: rgb(247, 86, 86);
    padding-right: 19px;
`;
const CateName = styled.div`
    font-size: 12px;
    color: #999;
`;
const CateDesc = styled.div`
    font-size: 16px;
    color: #333;
    margin-left: 10px;
`;
const SaleDesc = styled(CateDesc)`
    margin-left: 20px;
`;
const OptionItem = ({
    option,
    originalPrice,
    setSelectedOption,
}: {
    option: Option;
    originalPrice: number;
    setSelectedOption: Dispatch<SetStateAction<string>>;
}) => {
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
            <Button onClick={onClick}>
                <OptionDiv>
                    <InfoDiv>
                        <ExpiryDiv>
                            <CateName>유효기간 </CateName>
                            <CateDesc>{expiryDate} 까지</CateDesc>
                        </ExpiryDiv>
                        <SectionDiv>
                            <CateName>할인가 </CateName>
                            <SaleDesc>{sellingPrice}원</SaleDesc>
                        </SectionDiv>
                    </InfoDiv>
                    <SaleDiv>{saleRate} %</SaleDiv>
                </OptionDiv>
            </Button>
        </Fragment>
    );
};
export default OptionItem;
