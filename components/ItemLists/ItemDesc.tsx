import { ConItem } from 'types/itemTypes';
import styled from '@emotion/styled';

const DivStyle = styled.div`
    white-space: pre-wrap;
`;
const ItemDesc = ({ conItem }: { conItem: ConItem }) => {
    return (
        <DivStyle>
            <section>
                <div>
                    <div>브랜드 별 유의사항</div>
                    <div>{conItem.conCategory2?.info}</div>
                    <div>유의사항</div>
                    <div>{conItem.conCategory2?.conCategory1?.info}</div>
                </div>
                <div>환불 규정</div>
                <div>
                    <div>
                        니콘내콘에서 판매되는 쿠폰은 개인간 거래를 통해
                        리셀링되는 상품으로 환불 및 교환, 유효기간 연장이
                        불가합니다.{' '}
                    </div>
                    <div>
                        쿠폰 발행 방법의 따라 현금영수증이 불가할 수 있습니다.
                        해당 사유로 인한 환불 및 교환은 불가합니다.
                    </div>
                </div>
            </section>
        </DivStyle>
    );
};
export default ItemDesc;
