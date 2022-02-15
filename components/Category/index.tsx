import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import Link from 'next/link';
import { selectBrandActions } from 'store';

import Section from 'layout/Section';
import CategoryNav from './CategoryNav';
import { ItemsHolder } from 'components/Brand/styled';
import { conCategory1, conCategory2s } from 'types/categoryTypes';
import { conCategory1s } from 'types/categoryListTypes';

const Category = ({
    categories,
    categoryList,
    id,
}: {
    categories: conCategory1 | null;
    categoryList: conCategory1s[];
    id: number;
}): JSX.Element => {
    const dispatch = useDispatch();
    const getBrandHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const brandId = Number(event.currentTarget.id);

        dispatch(selectBrandActions.brand(brandId));
    };

    return (
        <CategoryContainer>
            <CategoryNav categoryList={categoryList} id={id} />
            <ItemsHolder>
                <SectionWrapper>
                    {id === 1 && categories ? (
                        <h3></h3>
                    ) : (
                        categories!.conCategory2s.map(
                            (category: conCategory2s, i: number) => (
                                <Section key={`category-${i}`}>
                                    <SectionDiv>
                                        <Link href={`/brands/${category.id}`}>
                                            <SectionA
                                                id={i.toString()}
                                                onClick={getBrandHandler}
                                            >
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
                            ),
                        )
                    )}
                </SectionWrapper>
            </ItemsHolder>
        </CategoryContainer>
    );
};

const CategoryContainer = styled.div`
    display: flex;
    margin-top: 59px;
    flex-direction: column;
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    background-color: rgb(238, 238, 238);
    overflow: auto;
`;

const SectionDiv = styled.div`
    height: 8em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;
const GrowDiv = styled.div`
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
    &:hover {
        -webkit-transform: scale(1.05);
    }
`;

const SectionA = styled.a`
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    text-align: center;
`;

const BrandImg = styled.img`
    width: 43px;
    height: 43px;
`;
const BrandName = styled.div`
    margin-top: 10px;
    font-size: 0%.875rem;
    padding: 0 0.5rem;
`;

export default Category;
