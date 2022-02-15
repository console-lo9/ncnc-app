import { useEffect, useState } from 'react';

import useAxios from 'hooks/useAxios';
import ItemInfo from './ItemInfo';
import ItemDesc from './ItemDesc';
import OptionButton from './OptionButton';
import { ConItem, ItemType, Option } from 'types/itemTypes';
import styled from '@emotion/styled';

const Item = ({ conItemId }: { conItemId: number }): JSX.Element => {
    const item = useAxios<ItemType>(`/con-items/${conItemId}`);
    const [conItem, setConItem] = useState<ConItem>();
    const [options, setOptions] = useState<Option[]>([]);
    useEffect(() => {
        if (item) {
            setConItem(item.conItem);
            setOptions(item.conItem.options);
        }
    }, [item]);
    if (!conItem || !options) return <div>로딩중</div>;
    return (
        <TestWrapper>
            <ItemInfo conItem={conItem} />
            <ItemDesc conItem={conItem} />

            <OptionButton
                options={options}
                originalPrice={conItem.originalPrice}
            />
        </TestWrapper>
    );
};

export const TestWrapper = styled.div`
    background-color: #fff;
`;
export default Item;
