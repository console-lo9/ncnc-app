import { useRouter } from 'next/router';
import BrandItems from 'components/Brand/BrandItems';
import { fetcher } from 'utils/fetcher';
import { useEffect, useState } from 'react';
import { ConCategory1 } from 'types/items';
import { conCategory2s, conItems } from 'types/categoryTypes';
import BrandItems2 from 'components/Brand/BrandItems';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

//  brands

const BrandId = () => {
    const [category, setCategory] = useState<conItems[]>([]);
    const brandId = useSelector(
        (state: RootState) => state.brand.selectedBrand,
    );
    const categoryId = useSelector(
        (state: RootState) => state.category.categoryId,
    );

    useEffect(() => {
        const getCategories = async () => {
            const fetchUrl = `con-category1s/${categoryId}/nested`;
            const { conCategory1 } = await fetcher(fetchUrl);
            const conCategory2 = await conCategory1.conCategory2s;
            const conItems = conCategory2[brandId].conItems;

            setCategory(conItems);
        };
        getCategories();
    }, []);

    return <BrandItems conItems={category} />;
};

export default BrandId;
