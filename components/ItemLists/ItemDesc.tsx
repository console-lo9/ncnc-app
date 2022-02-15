import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { optionActions, RootState } from 'store';
import { ConItem } from 'types/itemTypes';

import * as Styled from './styled/item-desc';

const ItemDesc = ({ conItem }: { conItem: ConItem }) => {
    const optionState = useSelector((state: RootState) => state.option);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(optionActions.changeOpenState(false));
    };
    return (
        <Styled.DescContainer>
            <Styled.DescSection>
                <Styled.CoverDiv
                    isOpen={optionState.isOpen}
                    onClick={onClick}
                />
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
                        <span>
                            · 니콘내콘에서 판매되는 쿠폰은 개인 간 거래를 통해
                            리셀링되는 상품으로 환불 및 유효기간 연장이
                            불가합니다.
                        </span>
                        <span>
                            · 쿠폰 사용이 불가할 경우, 카카오톡 플러스친구
                            @니콘내콘으로 문의해주시기 바랍니다.
                        </span>
                    </Styled.WarningDiv>
                </Styled.InfoText>
            </Styled.DescSection>
        </Styled.DescContainer>
    );
};
export default ItemDesc;
