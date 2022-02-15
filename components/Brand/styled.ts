import styled from '@emotion/styled';

export const ItemsHolder = styled.ul`
    height: 100%;
    background: rgb(238, 238, 238);
`;

export const ItemInfoWrapper = styled.div`
    display: flex;
    padding: 20px 0 20px 30px;
    border-top: 1px solid #eee;
    background-color: #fff;
`;

export const InfoLeft = styled.div``;

export const InfoRight = styled.div`
    padding: 0 20px;
`;

export const InfoBottom = styled.div`
    margin-top: 14px;

    & > span {
        margin-right: 10px;
    }
`;

export const ItemImage = styled.img`
    width: 70px;
    height: 70px;
`;

export const DiscountRate = styled.span`
    color: #f75656;
    font-size: 16px;
    margin-right: 10px;
`;

export const SellingPrice = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

export const OriginalPrice = styled.span`
    color: #999;
`;

export const ItemTitle = styled(SellingPrice)``;
