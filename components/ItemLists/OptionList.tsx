import styled from '@emotion/styled';
import { Fragment } from 'react';
import { Option } from 'types/itemTypes';
import OptionItem from './OptionItem';

const OptionList = ({
    options,
    originalPrice,
}: {
    options: Option[];
    originalPrice: number;
}) => {
    if (!options) return <div>로딩 중</div>;
    return (
        <Fragment>
            {Object.entries(options).map((option) => (
                <OptionItem
                    key={option[0]}
                    id={option[0]}
                    option={option[1]}
                    originalPrice={originalPrice}
                />
            ))}
        </Fragment>
    );
};
export default OptionList;
