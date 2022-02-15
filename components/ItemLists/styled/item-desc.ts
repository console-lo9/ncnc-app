import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DescContainer = styled.div`
    padding: 0 20px;
    margin-top: 30px;
`;

export const DescSection = styled.section`
    margin-bottom: 150px;
`;

export const CoverDiv = styled.div<{ isOpen: boolean }>`
    ${({ isOpen }) => {
        if (!isOpen) {
            return css`
                display: none;
            `;
        }
    }}
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
`;

export const InfoDiv = styled.div`
    margin-bottom: 20px;
`;

export const Info = styled.div`
    margin-bottom: 5px;
`;

export const InfoText = styled.div`
    color: #999;
    font-size: 14px;
    white-space: pre-wrap;
    margin-bottom: 20px;
    line-height: 1.5;
`;

export const WarningDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Warning = styled.span`
    color: rgb(255, 87, 87);
`;
