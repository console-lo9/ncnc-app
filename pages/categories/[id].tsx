import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Category from 'components/Category';
import { conCategory1s } from 'types/categoryListTypes';
import { conCategory1 } from 'types/categoryTypes';
import { getCategoryIdActions } from 'store';
import { fetcher } from 'utils/fetcher';
import { DealItemProps } from 'components/Deal/types';

const CategoriesPage = () => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState<conCategory1 | null>(null);
    const [categoryList, setCategoryList] = useState<conCategory1s[]>([]);
    const [conItemList, setConItemList] = useState<DealItemProps[]>([]);
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
            const getConItems = async () => {
                const fetchUrl = 'con-items/soon';
                const { conItems } = await fetcher(fetchUrl);
                setConItemList(conItems);
            };
            getConItems();

            dispatch(getCategoryIdActions.category(Number(id)));
            return;
        }
    }, [id]);
    return (
        categories && (
            <Category
                categories={categories}
                categoryList={categoryList}
                id={Number(id)}
                conItems={conItemList}
            />
        )
    );
};

export default CategoriesPage;
