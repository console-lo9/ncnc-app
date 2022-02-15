import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Option } from 'types/itemTypes';
import OptionList from './OptionList';
import { useDispatch, useSelector } from 'react-redux';
import { optionActions, RootState } from 'store';

const OptionContainer = styled.div`
    position: relative;
`;
const OptionSection = styled.section<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 50px;
    width: 100%;
    max-width: 672px;
    border-top: 1px solid rgb(204, 204, 204);
    ${({ isOpen }) => {
        if (!isOpen) {
            return css`
                display: none;
            `;
        }
    }}
`;
const ButtonSection = styled(OptionSection)`
    flex-direction: row;
`;
const OptionTitle = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
    height: 50px;
    width: 100%;
    color: rgb(0, 0, 0);
    background: rgb(238, 238, 238);
`;
const SelectedButton = styled.button`
    display: flex;
    font-size: 15px;
    margin: 15px 25px;
    padding: 10px 0 10px 20px;
    background-color: #ebeced;
    border-radius: 5px;
    text-align: left;
    width: 100%;
`;
const OptionBtn = styled.button<{ disabled: boolean }>`
    position: fixed;
    bottom: 0;
    background-color: black;
    color: white;
    width: 100%;

    max-width: 672px;
    height: 50px;
    font-size: 1rem;
    ${({ disabled }) => {
        if (disabled) {
            return css`
                background-color: #ccc;
            `;
        }
    }}
`;
const OptionDiv = styled.div<{ isOpen: boolean }>`
    background-color: white;
    width: 100%;
    max-width: 672px;
    height: 256px;

    overflow: scroll;
    ${({ isOpen }) => {
        if (!isOpen) {
            return css`
                display: none;
            `;
        }
    }}
`;
const OptionButton = ({
    options,
    originalPrice,
}: {
    options: Option[];
    originalPrice: number;
}) => {
    const [buttonText, setButtonText] = useState<string>('옵션 선택하기');
    const [selectedOption, setSelectedOption] = useState<string>('');
    const dispatch = useDispatch();
    const optionState = useSelector((state: RootState) => state.option);
    const onClick = () => {
        if (!optionState.isOpen) {
            dispatch(optionActions.changeOpenState(true));
        }
    };
    useEffect(() => {
        if (selectedOption) {
            setButtonText('구매하기');
        }
    }, [selectedOption]);
    return (
        <OptionContainer>
            <OptionSection isOpen={optionState.isOpen}>
                {' '}
                {/**isOpen={optionState.isOpen} */}
                <OptionTitle>
                    <span>옵션 선택하기</span>
                </OptionTitle>
                <OptionDiv isOpen={optionState.isOpen}>
                    <OptionList
                        options={options}
                        originalPrice={originalPrice}
                        setSelectedOption={setSelectedOption}
                    />
                </OptionDiv>
            </OptionSection>
            <ButtonSection
                isOpen={selectedOption !== '' && !optionState.isOpen}
            >
                <SelectedButton onClick={onClick}>
                    <span>{selectedOption}</span>
                </SelectedButton>
            </ButtonSection>
            <OptionBtn disabled={optionState.isOpen} onClick={onClick}>
                {buttonText}
            </OptionBtn>
        </OptionContainer>
    );
};
export default OptionButton;
