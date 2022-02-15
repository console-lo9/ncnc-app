import styled from '@emotion/styled';
import { ConItem } from 'types/itemTypes';
import { get3DigitsCost } from 'utils/functions';

const InfoContainer = styled.div`
    margin-top: 59px;
`;
const InfoDiv = styled.div`
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    position: relative;
`;
const ItemDiv = styled.div`
    display: flex;
    align-items: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
`;
const ItemTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
`;
const CateText = styled.div`
    color: #999;
    font-size: 13px;
    margin-bottom: 0.5rem;
`;
const NameText = styled.div`
    font-size: 16px;
    font-weight: 600;
`;
const CostDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;
const DiscountRateText = styled.div`
    font-size: 16px;
    margin-right: 10px;
    color: #f75656;
`;
const SellingPriceText = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
`;
const OriginalPriceText = styled.div`
    color: #999;
    text-decoration: line-through;
`;
const ItemInfo = ({ conItem }: { conItem: ConItem }) => {
    console.log(conItem);
    if (conItem && Object.keys(conItem).length === 0) return <div>로딩중</div>;
    return (
        <InfoContainer>
            <InfoDiv>
                <ItemDiv>
                    <img width={70} src={conItem.imageUrl} />
                    <ItemTextDiv>
                        <CateText>{conItem.conCategory2?.name}</CateText>
                        <NameText>{conItem.name}</NameText>
                        <CostDiv>
                            <DiscountRateText>
                                {conItem.discountRate}%
                            </DiscountRateText>
                            <SellingPriceText>
                                {get3DigitsCost(conItem.minSellingPrice)}원
                            </SellingPriceText>
                            <OriginalPriceText>
                                {get3DigitsCost(conItem.originalPrice)}원
                            </OriginalPriceText>
                        </CostDiv>
                    </ItemTextDiv>
                </ItemDiv>
            </InfoDiv>
        </InfoContainer>
    );
};
export default ItemInfo;
