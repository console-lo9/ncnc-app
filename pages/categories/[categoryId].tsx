import ItemList from 'components/ItemLists/ItemList';
import { useRouter } from 'next/router';
import { useState } from 'react';

const BrandItems = () => {
    // // 67 => 까페
    // // 선택한 브랜드의 상품들이 나열

    const router = useRouter();
    const categoryId = Number(router.query.categoryId);

    console.log(categoryId, 'in [category]');
    return <ItemList conCategoryId={61} />;
};

export default BrandItems;
