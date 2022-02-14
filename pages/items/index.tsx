import ItemList from 'components/ItemLists/ItemList';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const Items = () => {
    // 67 => 까페

    return (
        <Fragment>
            <ItemList conCategoryId={67} />
        </Fragment>
    );
};

export default Items;
