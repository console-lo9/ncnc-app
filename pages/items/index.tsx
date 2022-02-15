<<<<<<< HEAD
import React from 'react';

const Brand = () => {
    return <div>카테고리 별로 브랜드 선택</div>;
=======
import ItemList from 'components/ItemLists/ItemList';
import { useRouter } from 'next/router';
import React from 'react';

const Items = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(router);
    // return <Item conItemId={137} />;

    return <ItemList conCategoryId={67} />;
>>>>>>> 9fff0eda417fbe1e8def62e86373a7da97d77045
};

export default Brand;
