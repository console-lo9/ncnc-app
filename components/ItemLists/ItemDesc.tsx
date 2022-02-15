import { ConItem } from 'types/itemTypes';
import styled from '@emotion/styled';
import { Fragment } from 'react';

const DescContainer = styled.div`
    padding: 0 20px;
    margin-top: 30px;
`;
const DescSection = styled.section`
    margin-bottom: 150px;
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
    return (
        <DescContainer>
            <DescSection>
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
                        <Warning>
                            니콘내콘에서 판매되는 쿠폰은 개인간 거래를 통해
                            리셀링되는 상품으로 환불 및 교환, 유효기간 연장이
                            불가합니다.{' '}
                        </Warning>
                        <Warning>
                            쿠폰 발행 방법의 따라 현금영수증이 불가할 수
                            있습니다. 해당 사유로 인한 환불 및 교환은
                            불가합니다.
                        </Warning>
                    </WarningDiv>
                </InfoText>
            </DescSection>
        </DescContainer>
    );
};
export default ItemDesc;
