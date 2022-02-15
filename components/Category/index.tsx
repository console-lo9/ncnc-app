import { useDispatch } from 'react-redux';

import Link from 'next/link';
import { selectBrandActions } from 'store';

import Deal from 'components/Deal/Deal';
import CategoryNav from './CategoryNav';
import Section from 'layout/Section';
import { conCategory2s } from 'types/categoryTypes';
import { ItemsHolder } from 'components/Brand/styled';
import { CategoryProps } from './types';

import * as Styled from './styled';

const Category = ({
    categories,
    categoryList,
    id,
    conItems,
}: CategoryProps): JSX.Element => {
    const dispatch = useDispatch();
    const getBrandHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const brandId = Number(event.currentTarget.id);

        dispatch(selectBrandActions.brand(brandId));
    };

    return (
        <Styled.CategoryContainer>
            <CategoryNav categoryList={categoryList} id={id} />
            <ItemsHolder>
                {id === 1 && categories ? (
                    <Styled.DealBox>
                        <Deal onDealItems={conItems} />
                    </Styled.DealBox>
                ) : (
                    <Styled.SectionWrapper>
                        {categories!.conCategory2s.map(
                            (category: conCategory2s, i: number) => (
                                <Section key={`category-${i}`}>
                                    <Styled.SectionDiv>
                                        <Link href={`/brands/${category.id}`}>
                                            <Styled.SectionA
                                                id={i.toString()}
                                                onClick={getBrandHandler}
                                            >
                                                <Styled.GrowDiv>
                                                    <Styled.BrandImg
                                                        src={category.imageUrl}
                                                        alt="logo"
                                                    />
                                                    <Styled.BrandName>
                                                        {category.name}
                                                    </Styled.BrandName>
                                                </Styled.GrowDiv>
                                            </Styled.SectionA>
                                        </Link>
                                    </Styled.SectionDiv>
                                </Section>
                            ),
                        )}
                    </Styled.SectionWrapper>
                )}
            </ItemsHolder>
        </Styled.CategoryContainer>
    );
};

export default Category;
