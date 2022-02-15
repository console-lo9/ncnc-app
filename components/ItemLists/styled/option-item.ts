import styled from '@emotion/styled';

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #eee;
`;

export const OptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const InfoDiv = styled.div`
    padding: 10px 0px 10px 19px;
    flex-grow: 1;
    text-align: left;
`;

export const ExpiryDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const SectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SaleDiv = styled.div`
    font-size: 17px;
    color: rgb(247, 86, 86);
    padding-right: 19px;
`;

export const CateName = styled.div`
    font-size: 12px;
    color: #999;
`;

export const CateDesc = styled.div`
    font-size: 16px;
    color: #333;
    margin-left: 10px;
`;

export const SaleDesc = styled(CateDesc)`
    margin-left: 20px;
`;
