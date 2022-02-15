import { ConItem } from 'types/itemTypes';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { optionActions, RootState } from 'store';

const DescContainer = styled.div`
    padding: 0 20px;
    margin-top: 30px;
`;
const DescSection = styled.section`
    margin-bottom: 150px;
`;
const CoverDiv = styled.div<{ isOpen: boolean }>`
    ${({ isOpen }) => {
        if (!isOpen) {
            return css`
                display: none;
            `;
        }
    }}
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
`;
const InfoDiv = styled.div`
    margin-bottom: 20px;
`;
const Info = styled.div`
    margin-bottom: 5px;
`;
const InfoText = styled.div`
    color: #999;
    font-size: 14px;
    white-space: pre-wrap;
    margin-bottom: 20px;
    line-height: 1.5;
`;
const WarningDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
const Warning = styled.span`
    color: rgb(255, 87, 87);
`;
const ItemDesc = ({ conItem }: { conItem: ConItem }) => {
    const optionState = useSelector((state: RootState) => state.option);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(optionActions.changeOpenState(false));
    };
    return (
        <DescContainer>
            <DescSection>
                <CoverDiv isOpen={optionState.isOpen} onClick={onClick} />
                <InfoDiv>
                    <Info>브랜드 별 유의사항</Info>
                    <InfoText>{conItem.conCategory2?.info}</InfoText>
                    {conItem.info && (
                        <Fragment>
                            <Info>상품 별 유의사항</Info>
                            <InfoText>{conItem.info}</InfoText>
                        </Fragment>
                    )}

                    <Info>유의사항</Info>
                    <InfoText>
                        {conItem.conCategory2?.conCategory1?.info}
                    </InfoText>
                </InfoDiv>
                <Info>환불 규정</Info>
                <InfoText>
                    <WarningDiv>
                        <span>
                            · 니콘내콘에서 판매되는 쿠폰은 개인 간 거래를 통해
                            리셀링되는 상품으로 환불 및 유효기간 연장이
                            불가합니다.
                        </span>
                        <span>
                            · 쿠폰 사용이 불가할 경우, 카카오톡 플러스친구
                            @니콘내콘으로 문의해주시기 바랍니다.
                        </span>
                    </WarningDiv>
                </InfoText>
            </DescSection>
        </DescContainer>
    );
};
export default ItemDesc;
