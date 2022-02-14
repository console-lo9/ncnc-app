import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Option } from 'types/itemTypes';
import OptionList from './OptionList';
import { useDispatch, useSelector } from 'react-redux';
import { optionActions, RootState } from 'store';

const OptionContainer = styled.div`
    position: relative;
`;
const SelectedItem = styled.section<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-top: 1px solid rgb(204, 204, 204);
    ${({ isOpen }) => {
        if (!isOpen) {
            return css`
                display: none;
            `;
        }
    }}
`;
const SelectedButton = styled.button`
    font-size: 15px;
    margin: 15px 25px;
    padding: 10px 0 10px 20px;
    background-color: #ebeced;
    border-radius: 5px;
    text-align: left;
    width: 100%;
`;
const OptionBtn = styled.button`
    background-color: black;
    color: white;
    width: 100%;
    height: 60px;
    font-size: 1rem;
`;
const OptionDiv = styled.div<{ isOpen: boolean }>`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;

    bottom: 50px;
    position: absolute;
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
    const dispatch = useDispatch();
    const optionState = useSelector((state: RootState) => state.option);
    const selectedItem = useSelector((state: RootState) => state.selectedItem);
    const onClick = () => {
        if (!optionState.isOpen) {
            dispatch(optionActions.changeOpenState(true));
        }
    };

    return (
        <OptionContainer>
            <SelectedItem isOpen={selectedItem.text !== ''}>
                <SelectedButton>
                    <span>{selectedItem.text}</span>
                </SelectedButton>
            </SelectedItem>
            <OptionBtn onClick={onClick}>{buttonText}</OptionBtn>
            <OptionDiv isOpen={optionState.isOpen}>
                <OptionList options={options} originalPrice={originalPrice} />
            </OptionDiv>
        </OptionContainer>
    );
};
export default OptionButton;
