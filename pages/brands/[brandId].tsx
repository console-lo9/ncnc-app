import BrandItems from 'components/Brand/BrandItems';
import { fetcher } from 'utils/fetcher';
import { useEffect, useState } from 'react';
import { ConItems } from 'types/items';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useRouter } from 'next/router';
import { conCategory2s } from 'types/categoryTypes';

//  brands

const BrandId = () => {
    const [category, setCategory] = useState<ConItems[]>([]);
    const brandId = useSelector(
        (state: RootState) => state.brand.selectedBrand,
    );
    const categoryId = useSelector(
        (state: RootState) => state.category.categoryId,
    );

    const router = useRouter();
    const id = Number(router.query.brandId);

    useEffect(() => {
        if (id) {
            const getCategories = async () => {
                // /*
                const fetchUrl = `con-category2s/${id}`;
                const { conCategory2 } = await fetcher(fetchUrl);
                const { conCategory1Id } = conCategory2;
                const fetchUrl2 = `con-category1s/${conCategory1Id}/nested`;
                const { conCategory1 } = await fetcher(fetchUrl2);
                const { conCategory2s } = conCategory1;
                console.log('asdasd', conCategory2s);
                const selectedBrand = conCategory2s.find(
                    (brand: conCategory2s) => Number(brand.id) === id,
                );
                const { conItems } = selectedBrand;

                // const fetchUrl = `con-category1s/${categoryId}/nested`;
                // const { conCategory1 } = await fetcher(fetchUrl);
                // const conCategory2 = await conCategory1.conCategory2s;
                // const conItems = conCategory2[brandId].conItems;

                setCategory(conItems);
            };
            getCategories();
        }
    }, [id]);
    if (!category) {
        return <div>Loading...</div>;
    }
    return <BrandItems conItems={category} />;
};

export default BrandId;
