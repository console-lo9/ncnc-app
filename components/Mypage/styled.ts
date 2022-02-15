import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MypageDiv = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: translateX(-100%);
    transition: 0.7s;
    display: block;
    ${({ isOpen }) => {
        if (isOpen) {
            return css`
                transform: translateX(0);
            `;
        }
    }}
    z-index: 100;
`;

export const Nav = styled.nav`
    background-color: rgb(255, 255, 255);
    height: 58px;
    top: 0px;
`;

export const NavDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 17px;
`;

export const TitleSpan = styled.span`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
`;

export const EmptyDiv = styled.div`
    background-color: rgb(235, 236, 237);
    height: 10px;
`;

export const EnterDiv = styled.div`
    display: flex;
    padding: 15px 17px;
    background-color: #fff;
    justify-content: space-between;
`;

export const TextSpan = styled.div`
    font-size: 15px;
`;
