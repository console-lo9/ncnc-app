import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Contacts  - index.ts
export const ContactDiv = styled.div`
    display: flex;
    margin-top: 59px;
    flex-direction: column;
    background-color: #fff;
`;

export const DescSection = styled.section`
    padding: 17px;
    height: 200px;
`;

export const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const Time = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 3px;
`;

export const Rest = styled.div`
    font-size: 16px;
    color: rgb(128, 128, 128);
`;

export const BackgroundDiv = styled.div`
    background-color: rgb(235, 236, 237);
    height: 10px;
`;

export const FrequentQaSection = styled.section`
    padding: 17px 17px 0px;
`;

export const FrequentQa = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`;

export const ButtonDiv = styled.div`
    display: flex;
`;

export const FrequentButton = styled.button<{ isClick: boolean }>`
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    width: 100%;
    ${({ isClick }) => {
        if (isClick) {
            return css`
                color: #f75656 !important;
                border-bottom: 2px solid #f75656 !important;
            `;
        }
    }}
`;

//  Qna - Qna.tsx
export const QnaContainer = styled.div`
    border-bottom: 2px solid #ebeced;
`;

export const QuestionButton = styled.button`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    padding: 17px;
    width: 100%;
`;

export const QSpan = styled.span`
    margin-right: 10px;
    color: rgb(255, 87, 87);
`;

export const QuestionSpan = styled.span`
    flex-grow: 1;
    text-align: left;
`;

export const AnswerContainer = styled.div<{ active: boolean }>`
    ${({ active }) => {
        if (!active) {
            return css`
                display: none;
            `;
        }
    }}

    background-color: rgb(235, 236, 237);
    padding: 17px;
`;

export const AnswerDiv = styled.div`
    background-color: rgb(235, 236, 237);
    padding: 17px;
    font-size: 16px;
    transition: all 1.5s ease 0s;
    line-height: 1.3;
    white-space: pre-wrap;
`;
