import { Dispatch, Fragment, SetStateAction } from 'react';
import { Option } from 'types/itemTypes';
import OptionItem from './OptionItem';

const OptionList = ({
    options,
    originalPrice,
    setSelectedOption,
}: {
    options: Option[];
    originalPrice: number;
    setSelectedOption: Dispatch<SetStateAction<string>>;
}) => {
    if (!options) return <div>로딩 중</div>;
    return (
        <Fragment>
            {Object.entries(options).map((option) => (
                <OptionItem
                    key={option[0]}
                    option={option[1]}
                    originalPrice={originalPrice}
                    setSelectedOption={setSelectedOption}
                />
            ))}
        </Fragment>
    );
};
export default OptionList;
