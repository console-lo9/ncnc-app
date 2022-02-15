import { ConItem } from 'types/itemTypes';
import { get3DigitsCost } from 'utils/functions';
import * as Styled from './styled';

const ItemInfo = ({ conItem }: { conItem: ConItem }) => {
    if (conItem && Object.keys(conItem).length === 0) return <div>로딩중</div>;
    return (
        <Styled.InfoContainer>
            <Styled.InfoDiv2>
                <Styled.ItemDiv>
                    <img width={70} src={conItem.imageUrl} />
                    <Styled.ItemTextDiv>
                        <Styled.CateText>
                            {conItem.conCategory2?.name}
                        </Styled.CateText>
                        <Styled.NameText>{conItem.name}</Styled.NameText>
                        <Styled.CostDiv>
                            <Styled.DiscountRateText>
                                {conItem.discountRate}%
                            </Styled.DiscountRateText>
                            <Styled.SellingPriceText>
                                {get3DigitsCost(conItem.minSellingPrice)}원
                            </Styled.SellingPriceText>
                            <Styled.OriginalPriceText>
                                {get3DigitsCost(conItem.originalPrice)}원
                            </Styled.OriginalPriceText>
                        </Styled.CostDiv>
                    </Styled.ItemTextDiv>
                </Styled.ItemDiv>
            </Styled.InfoDiv2>
        </Styled.InfoContainer>
    );
};
export default ItemInfo;
