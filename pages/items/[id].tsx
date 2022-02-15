import { useRouter } from 'next/router';
import Item from 'components/ItemLists/Item';

const Items = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) return <div>로딩 중</div>;
    return <Item conItemId={Number(id)} />;
};

export default Items;
