import { Dispatch, SetStateAction } from 'react';

import { Qa } from 'types/qaTypes';
import Image from 'next/image';
import qaCloseArrow from 'public/qaCloseArrow.svg';
import qaOpenArrow from 'public/qaOpenArrow.svg';

import * as Styled from './styled';

export interface QnaProps {
    qa: Qa;
    currentQa: number;
    setCurrentQa: Dispatch<SetStateAction<number>>;
}

const Qna = ({ qa, currentQa, setCurrentQa }: QnaProps) => {
    const clickHandler = () => {
        setCurrentQa(qa.id);
        if (qa.id === currentQa) {
            setCurrentQa(0);
        }
    };

    return (
        <Styled.QnaContainer>
            <Styled.QuestionButton onClick={clickHandler}>
                <Styled.QSpan>Q.</Styled.QSpan>
                <Styled.QuestionSpan>{qa.question}</Styled.QuestionSpan>
                <span>
                    {qa.id === currentQa ? (
                        <Image src={qaCloseArrow} />
                    ) : (
                        <Image src={qaOpenArrow} />
                    )}
                </span>
            </Styled.QuestionButton>
            <Styled.AnswerContainer active={qa.id === currentQa}>
                <Styled.AnswerDiv>
                    <p>{qa.answer}</p>
                </Styled.AnswerDiv>
            </Styled.AnswerContainer>
        </Styled.QnaContainer>
    );
};
export default Qna;
