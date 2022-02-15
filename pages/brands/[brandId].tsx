import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { conCategory2s } from 'types/categoryTypes';

import BrandItems from 'components/Brand/BrandItems';
import { fetcher } from 'utils/fetcher';
import { ConItems } from 'types/items';

const BrandId = () => {
    const router = useRouter();
    const id = Number(router.query.brandId);

    console.log(id);
    const [category, setCategory] = useState<ConItems[]>([]);

    useEffect(() => {
        if (id) {
            const getCategories = async () => {
                const fetchUrl = `con-category2s/${id}`;
                const { conCategory2 } = await fetcher(fetchUrl);
                const { conCategory1Id } = conCategory2;
                const fetchUrl2 = `con-category1s/${conCategory1Id}/nested`;
                const { conCategory1 } = await fetcher(fetchUrl2);
                const { conCategory2s } = conCategory1;
                const selectedBrand = conCategory2s.find(
                    (brand: conCategory2s) => Number(brand.id) === id,
                );
                const { conItems } = selectedBrand;

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
