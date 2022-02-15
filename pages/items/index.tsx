import ItemList from 'components/ItemLists/ItemList';
import { useRouter } from 'next/router';
import React from 'react';

const Items = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(router);
    // return <Item conItemId={137} />;

    return <ItemList conCategoryId={67} />;
};

export default Items;
