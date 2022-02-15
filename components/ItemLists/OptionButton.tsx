import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Option } from 'types/itemTypes';
import OptionList from './OptionList';
import { useDispatch, useSelector } from 'react-redux';
import { optionActions, RootState } from 'store';
import Image from 'next/image';
import pencil from 'assets/pencil.svg';
import closeButton from 'assets/closeButton.svg';

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

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
                animation-name: ${slideDown};
                display: none;
            `;
        }
    }}
    animation-duration: 150ms;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;
`;

const ButtonSection = styled.section<{ isOpen: boolean }>`
    display: flex;
    flex-direction: row;
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
    background-color: white;
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
const TitleText = styled.span`
    flex-grow: 1;
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
const SelectedSpan = styled.span`
    flex-grow: 1;
`;
const ImageDiv = styled.div`
    padding-right: 10px;
`;
const OptionBtn = styled.button<{ disabled: boolean }>`
    position: fixed;
    bottom: 0;
    background-color: #ff5757;
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
        <OptionContainer>
            <OptionSection isOpen={optionState.isOpen}>
                <OptionTitle>
                    <TitleText>옵션 선택하기</TitleText>
                    <ImageDiv>
                        <button onClick={closeHandler}>
                            <Image src={closeButton} />
                        </button>
                    </ImageDiv>
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
                <SelectedButton onClick={optionHandler}>
                    <SelectedSpan>{selectedOption}</SelectedSpan>
                    <ImageDiv>
                        <Image src={pencil} />
                    </ImageDiv>
                </SelectedButton>
            </ButtonSection>
            {selectedOption === '' && !optionState.isOpen ? (
                <OptionBtn
                    disabled={optionState.isOpen}
                    onClick={optionHandler}
                >
                    옵션 선택하기
                </OptionBtn>
            ) : (
                <OptionBtn
                    disabled={optionState.isOpen}
                    onClick={optionHandler}
                >
                    구매하기
                </OptionBtn>
            )}
        </OptionContainer>
    );
};
export default OptionButton;
