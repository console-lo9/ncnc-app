import { SectionWrapper } from 'components/Category/styled';
import styled from '@emotion/styled';

export const TitleDiv = styled.div`
    display: flex;
    width: 100%;
    padding-left: 20px;
    margin: 14px 0;
`;

export const WarnDiv = styled.div`
    font-size: 14px;
    color: red;
    margin-bottom: 5px;
`;

export const TodaySaleDiv = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

export const CategoryContainer = styled.div`
    display: flex;
    margin-top: 59px;
    flex-direction: column;
`;

export const MainWrapper = styled(SectionWrapper)`
    padding-bottom: 0;
`;

export const SectionDiv = styled.div`
    height: 8em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;

export const SectionA = styled.a`
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    text-align: center;
`;

export const GrowDiv = styled.div`
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
    &:hover {
        -webkit-transform: scale(1.05);
    }
`;

export const BrandImg = styled.img`
    width: 43px;
    height: 43px;
`;

export const BrandName = styled.div`
    margin-top: 10px;
    font-size: 12px;
    padding: 0 0.5rem;
`;
