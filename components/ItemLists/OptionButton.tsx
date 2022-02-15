import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { optionActions, RootState } from 'store';
import OptionList from './OptionList';
import { Option } from 'types/itemTypes';

import pencil from 'public/pencil.svg';
import closeButton from 'public/closeButton.svg';
import * as Styled from './styled/option-button';

const OptionButton = ({
    options,
    originalPrice,
}: {
    options: Option[];
    originalPrice: number;
}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const dispatch = useDispatch();
    const optionState = useSelector((state: RootState) => state.option);
    const optionHandler = () => {
        if (!optionState.isOpen) {
            dispatch(optionActions.changeOpenState(true));
        }
    };
    const closeHandler = () => {
        dispatch(optionActions.changeOpenState(false));
        setSelectedOption('');
    };
    return (
        <Styled.OptionContainer>
            <Styled.OptionSection isOpen={optionState.isOpen}>
                <Styled.OptionTitle>
                    <Styled.TitleText>옵션 선택하기</Styled.TitleText>
                    <Styled.ImageDiv>
                        <button onClick={closeHandler}>
                            <Image src={closeButton} />
                        </button>
                    </Styled.ImageDiv>
                </Styled.OptionTitle>
                <Styled.OptionDiv isOpen={optionState.isOpen}>
                    <OptionList
                        options={options}
                        originalPrice={originalPrice}
                        setSelectedOption={setSelectedOption}
                    />
                </Styled.OptionDiv>
            </Styled.OptionSection>
            <Styled.ButtonSection
                isOpen={selectedOption !== '' && !optionState.isOpen}
            >
                <Styled.SelectedButton onClick={optionHandler}>
                    <Styled.SelectedSpan>{selectedOption}</Styled.SelectedSpan>
                    <Styled.ImageDiv>
                        <Image src={pencil} />
                    </Styled.ImageDiv>
                </Styled.SelectedButton>
            </Styled.ButtonSection>
            {selectedOption === '' && !optionState.isOpen ? (
                <Styled.OptionBtn
                    disabled={optionState.isOpen}
                    onClick={optionHandler}
                >
                    옵션 선택하기
                </Styled.OptionBtn>
            ) : (
                <Styled.OptionBtn
                    disabled={optionState.isOpen}
                    onClick={optionHandler}
                >
                    구매하기
                </Styled.OptionBtn>
            )}
        </Styled.OptionContainer>
    );
};
export default OptionButton;
