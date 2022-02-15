import { Fragment, useEffect, useState } from 'react';
import useAxios from 'hooks/useAxios';
import { ConItem, ItemType, Option } from 'types/itemTypes';
import ItemInfo from './ItemInfo';
import ItemDesc from './ItemDesc';
import OptionButton from './OptionButton';

const Item = ({ conItemId }: { conItemId: number }): JSX.Element => {
    const item = useAxios<ItemType>(`/con-items/${conItemId}`);
    const [conItem, setConItem] = useState<ConItem>({});
    const [options, setOptions] = useState<Option[]>({});
    useEffect(() => {
        if (item) {
            setConItem(item.conItem);
            setOptions(item.conItem.options);
        }
    }, [item]);
    if (!conItem || !options) return <div>로딩중</div>;
    return (
        <Fragment>
            <ItemInfo conItem={conItem} />
            <ItemDesc conItem={conItem} />
            <OptionButton
                options={options}
                originalPrice={conItem.originalPrice}
            />
        </Fragment>
    );
};
export default Item;
