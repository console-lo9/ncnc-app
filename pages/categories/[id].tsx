// import Category from 'components/Category';
// import { useRouter } from 'next/router';

// const CategoriesPage = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     if (!id) return <div>로딩 중</div>;
//     return <Category id={Number(id)} />;
// };

import Category from 'components/Category';
import useAxios from 'hooks/useAxios';
import Section from 'layout/Section';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { conCategory1s } from 'types/categoryListTypes';
import { conCategory1 } from 'types/categoryTypes';
import { fetcher } from 'utils/fetcher';

const CategoriesPage: NextPage = () => {
    const [categories, setCategories] = useState<conCategory1 | null>(null);
    const [categoryList, setCategoryList] = useState<conCategory1s[]>([]);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (id) {
            const getCategories = async () => {
                const fetchUrl = `con-category1s/${id}/nested`;
                const { conCategory1 } = await fetcher(fetchUrl);
                setCategories(conCategory1);
            };
            getCategories();
            const getCategoryList = async () => {
                const fetchUrl = `con-category1s`;
                const { conCategory1s } = await fetcher(fetchUrl);
                setCategoryList(conCategory1s);
            };
            getCategoryList();
            return;
        }
    }, [id]);
    return (
        categories && (
            <Category
                categories={categories}
                categoryList={categoryList}
                id={Number(id)}
            />
        )
    );
};

export default CategoriesPage;
