import styled from '@emotion/styled';

// CategoryNav - CategoryNav.tsx
export const CategoryNavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    max-width: 48rem;
    background-color: #fff;
    z-index: 49;
`;

export const CategoryNavBox = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    font-size: 16px;
`;

export const CategoryNavSlider = styled.div`
    padding: 0px 10px;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    font-size: 16px;
`;

export const CategoryNavA = styled.a`
    display: inline-flex;
    padding: 10px 14px;
    height: 55px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    &.selected {
        border-bottom: 2px solid #f75656;
        padding: 10px 14px 9px 14px;
        color: #f75656;
    }
`;

export const CategoryNavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Category - index.tsx
export const CategoryContainer = styled.div`
    display: flex;
    margin-top: 59px;
    flex-direction: column;
`;

export const DealBox = styled.div`
    & > ul {
        margin-top: 5px;
    }
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    background-color: rgb(238, 238, 238);
    overflow: auto;
`;

export const SectionDiv = styled.div`
    height: 8em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;
export const GrowDiv = styled.div`
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
    &:hover {
        -webkit-transform: scale(1.05);
    }
`;

export const SectionA = styled.a`
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    text-align: center;
`;

export const BrandImg = styled.img`
    width: 43px;
    height: 43px;
`;

export const BrandName = styled.div`
    margin-top: 10px;
    font-size: 0%.875rem;
    padding: 0 0.5rem;
`;
