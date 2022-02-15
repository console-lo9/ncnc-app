import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import Link from 'next/link';
import { selectBrandActions } from 'store';

import Section from 'layout/Section';

import { CategoryListType } from 'types/categoryListTypes';
import useAxios from 'hooks/useAxios';
import { Fragment } from 'react';
import { SectionWrapper } from 'components/Category';

const Category = (): JSX.Element => {
    const conCategory1s =
        useAxios<CategoryListType>('/con-category1s')?.conCategory1s;

    return (
        <Fragment>
            <MainWrapper>
                {!conCategory1s ? (
                    <h3></h3>
                ) : (
                    conCategory1s.map((category) => (
                        <Section key={category.id}>
                            <SectionDiv>
                                <Link href={`/categories/${category.id}`}>
                                    <SectionA>
                                        <GrowDiv>
                                            <BrandImg
                                                src={category.imageUrl}
                                                alt="logo"
                                            />
                                            <BrandName>
                                                {category.name}
                                            </BrandName>
                                        </GrowDiv>
                                    </SectionA>
                                </Link>
                            </SectionDiv>
                        </Section>
                    ))
                )}
                <TitleDiv>
                    <div>
                        <WarnDiv>놓치지 마세요</WarnDiv>
                        <TodaySaleDiv>오늘의 땡처리콘!</TodaySaleDiv>
                    </div>
                </TitleDiv>
            </MainWrapper>
        </Fragment>
    );
};

const TitleDiv = styled.div`
    display: flex;
    width: 100%;

    margin: 14px 0;
`;
const WarnDiv = styled.div`
    font-size: 14px;
    color: red;
    margin-bottom: 5px;
`;
const TodaySaleDiv = styled.div`
    font-size: 16px;
    font-weight: 700;
`;

const CategoryContainer = styled.div`
    display: flex;
    margin-top: 59px;
    flex-direction: column;
`;

export const MainWrapper = styled(SectionWrapper)`
    padding-bottom: 0;
`;

const SectionDiv = styled.div`
    height: 8em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;

const SectionA = styled.a`
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    text-align: center;
`;
const GrowDiv = styled.div`
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
    &:hover {
        -webkit-transform: scale(1.05);
    }
`;

const BrandImg = styled.img`
    width: 43px;
    height: 43px;
`;
const BrandName = styled.div`
    margin-top: 10px;
    font-size: 12px;
    padding: 0 0.5rem;
`;

export default Category;