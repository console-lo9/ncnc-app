import styled from '@emotion/styled';
import { ButtonDivProps, ContainerProps } from './types';

export const Wrapper = styled.div`
    display: flex;
    overflow: hidden;
    margin-top: 55px;
`;

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    transform: translateX(${(props) => props.translateX}px);
    transition: 350ms all ease-in-out;
`;

export const Inner = styled.div`
    flex-shrink: 0;
    width: 672px;
    height: 252px;
    overflow: hidden;
    position: relative;
`;

export const Buttons = styled.div`
    position: absolute;
    top: 270px;
    left: 80%;
    transform: translateX(100%);
    display: flex;
`;

export const BtnDiv = styled.div<ButtonDivProps>`
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${(props) => (props.isActive ? '#000' : '#fff')};
`;
