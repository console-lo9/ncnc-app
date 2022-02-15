import styled from '@emotion/styled';
import useAxios from 'hooks/useAxios';
import Section from 'layout/Section';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectBrandActions } from 'store';
import { CategoryListType, conCategory1s } from 'types/categoryListTypes';
import { CategoryType, conCategory1, conCategory2s } from 'types/categoryTypes';
import CategoryNav from './CategoryNav';

// const Category = ({ id }: { id: number }): JSX.Element => {
//     const conCategory = useAxios<CategoryType>(`con-category1s/${id}/nested`);
//     const conCategoryList = useAxios<CategoryListType>(`con-category1s`);
//     const [brandList, setBrandList] = useState<conCategory1>();
//     const [categoryList, setCategoryList] = useState<conCategory1s[]>([]);
//     useEffect(() => {
//         if (conCategory) {
//             setBrandList(conCategory.conCategory1);
//         }
//         if (conCategoryList) {
//             setCategoryList(conCategoryList.conCategory1s);
//         }
//     }, [conCategory, conCategoryList]);
//     if (!brandList || !categoryList) return <div>로딩중</div>;
//     return (
//         <>
//             <CategoryNav categoryList={categoryList} />
//             <SectionWrapper>
//                 {brandList.conCategory2s.map(
//                     (brand: conCategory2s, i: number) => (
//                         <Section key={`category-${i}`}>
//                             <Link href={`/brands/${brand.id}`}>
//                                 <a>
//                                     <h3>{brand.name}</h3>
//                                     <img src={brand.imageUrl} alt="logo" />
//                                 </a>
//                             </Link>
//                         </Section>
//                     ),
//                 )}
//             </SectionWrapper>
//         </>
//     );
// };

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
        <>
            <CategoryNav categoryList={categoryList} id={id} />
            <SectionWrapper>
                {categories &&
                    categories!.conCategory2s.map(
                        (category: conCategory2s, i: number) => (
                            <Section key={`category-${i}`}>
                                <SectionDiv>
                                    <Link href={`/brands/${category.id}`}>
                                        <SectionA
                                            id={i.toString()}
                                            onClick={getBrandHandler}
                                        >
                                            <BrandImg
                                                src={category.imageUrl}
                                                alt="logo"
                                            />
                                            <BrandName>
                                                {category.name}
                                            </BrandName>
                                        </SectionA>
                                    </Link>
                                </SectionDiv>
                            </Section>
                        ),
                    )}
            </SectionWrapper>
        </>
    );
};

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    background-color: rgb(238, 238, 238);
    margin-top: 40px;
    overflow: scroll;
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
