import { Fragment } from 'react';
import { ConItem } from 'types/itemTypes';

import * as Styled from './styled';

const ItemDesc = ({ conItem }: { conItem: ConItem }) => {
    return (
        <Styled.DescContainer>
            <Styled.DescSection>
                <Styled.InfoDiv>
                    <Styled.Info>브랜드 별 유의사항</Styled.Info>
                    <Styled.InfoText>
                        {conItem.conCategory2?.info}
                    </Styled.InfoText>
                    {conItem.info && (
                        <Fragment>
                            <Styled.Info>상품 별 유의사항</Styled.Info>
                            <Styled.InfoText>{conItem.info}</Styled.InfoText>
                        </Fragment>
                    )}

                    <Styled.Info>유의사항</Styled.Info>
                    <Styled.InfoText>
                        {conItem.conCategory2?.conCategory1?.info}
                    </Styled.InfoText>
                </Styled.InfoDiv>
                <Styled.Info>환불 규정</Styled.Info>
                <Styled.InfoText>
                    <Styled.WarningDiv>
                        <Styled.Warning>
                            니콘내콘에서 판매되는 쿠폰은 개인간 거래를 통해
                            리셀링되는 상품으로 환불 및 교환, 유효기간 연장이
                            불가합니다.{' '}
                        </Styled.Warning>
                        <Styled.Warning>
                            쿠폰 발행 방법의 따라 현금영수증이 불가할 수
                            있습니다. 해당 사유로 인한 환불 및 교환은
                            불가합니다.
                        </Styled.Warning>
                    </Styled.WarningDiv>
                </Styled.InfoText>
            </Styled.DescSection>
        </Styled.DescContainer>
    );
};
export default ItemDesc;
