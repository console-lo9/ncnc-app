import { ConItem } from 'types/itemTypes';
import { get3DigitsCost } from 'utils/functions';

const ItemInfo = ({ conItem }: { conItem: ConItem }) => {
    console.log(conItem);
    if (conItem && Object.keys(conItem).length === 0) return <div>로딩중</div>;
    return (
        <div>
            <div>
                <img width={70} src={conItem.imageUrl} />
                <div>
                    <div>{conItem.conCategory2?.name}</div>
                    <div>{conItem.name}</div>
                    <div>
                        <div>{conItem.discountRate}%</div>
                        <div>{get3DigitsCost(conItem.minSellingPrice)}원</div>
                        <div>{get3DigitsCost(conItem.originalPrice)}원</div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};
export default ItemInfo;
