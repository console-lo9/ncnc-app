import { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Qa } from 'types/qaTypes';
import Image from 'next/image';
import qaCloseArrow from 'assets/qaCloseArrow.svg';
import qaOpenArrow from 'assets/qaOpenArrow.svg';

const QnaContainer = styled.div`
    border-bottom: 2px solid #ebeced;
`;
const QuestionButton = styled.button`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    padding: 17px;
    width: 100%;
`;
const QSpan = styled.span`
    margin-right: 10px;
    color: rgb(255, 87, 87);
`;
const QuestionSpan = styled.span`
    flex-grow: 1;
    text-align: left;
`;
const AnswerContainer = styled.div<{ active: boolean }>`
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
const AnswerDiv = styled.div`
    background-color: rgb(235, 236, 237);
    padding: 17px;
    font-size: 16px;
    transition: all 1.5s ease 0s;
    line-height: 1.3;
    white-space: pre-wrap;
`;

const Qna = ({
    qa,
    currentQa,
    setCurrentQa,
}: {
    qa: Qa;
    currentQa: number;
    setCurrentQa: Dispatch<SetStateAction<number>>;
}) => {
    const clickHandler = () => {
        setCurrentQa(qa.id);
        if (qa.id === currentQa) {
            setCurrentQa(0);
        }
    };

    return (
        <QnaContainer>
            <QuestionButton onClick={clickHandler}>
                <QSpan>Q.</QSpan>
                <QuestionSpan>{qa.question}</QuestionSpan>
                <span>
                    {qa.id === currentQa ? (
                        <Image src={qaCloseArrow} />
                    ) : (
                        <Image src={qaOpenArrow} />
                    )}
                </span>
            </QuestionButton>
            <AnswerContainer active={qa.id === currentQa}>
                <AnswerDiv>
                    <p>{qa.answer}</p>
                </AnswerDiv>
            </AnswerContainer>
        </QnaContainer>
    );
};
export default Qna;
