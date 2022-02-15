import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

export const OptionContainer = styled.div`
    position: relative;
`;

export const OptionSection = styled.section<{ isOpen: boolean }>`
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

export const ButtonSection = styled.section<{ isOpen: boolean }>`
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

export const OptionTitle = styled.div`
    display: flex;
    align-items: center;
    padding-left: 15px;
    height: 50px;
    width: 100%;
    color: rgb(0, 0, 0);
    background: rgb(238, 238, 238);
`;

export const TitleText = styled.span`
    flex-grow: 1;
`;

export const SelectedButton = styled.button`
    display: flex;
    font-size: 15px;
    margin: 15px 25px;
    padding: 10px 0 10px 20px;
    background-color: #ebeced;
    border-radius: 5px;
    text-align: left;
    width: 100%;
`;

export const SelectedSpan = styled.span`
    flex-grow: 1;
`;

export const ImageDiv = styled.div`
    padding-right: 10px;
`;

export const OptionBtn = styled.button<{ disabled: boolean }>`
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

export const OptionDiv = styled.div<{ isOpen: boolean }>`
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
