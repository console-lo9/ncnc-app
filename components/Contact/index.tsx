import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useAxios from 'hooks/useAxios';
import { useEffect, useState } from 'react';
import { QaType, QnaType } from 'types/qaTypes';
import QnaList from './QnaList';
const ContactDiv = styled.div`
    display: flex;
    margin-top: 59px;
    flex-direction: column;
`;
const DescSection = styled.section`
    padding: 17px;
    height: 200px;
`;
const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`;
const Time = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 3px;
`;
const Rest = styled.div`
    font-size: 16px;
    color: rgb(128, 128, 128);
`;
const BackgroundDiv = styled.div`
    background-color: rgb(235, 236, 237);
    height: 10px;
`;
const FrequentQaSection = styled.section`
    padding: 17px 17px 0px;
`;
const FrequentQa = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`;
const ButtonDiv = styled.div`
    display: flex;
`;
const FrequentButton = styled.button<{ isClick: boolean }>`
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
const Contact = () => {
    const [qaTypes, setQaTypes] = useState<QaType[]>();
    const [qaId, setQaId] = useState<number>(1);
    const data = useAxios<QnaType>('/qa-types');

    const qaIdHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const id = Number(event.currentTarget.id);
        setQaId(id);
    };
    useEffect(() => {
        setQaTypes(data?.qaTypes);
    }, [data]);
    if (!qaTypes) return <div>로딩중</div>;
    return (
        <ContactDiv>
            <DescSection>
                <Title>상담 시간 안내</Title>
                <Time>평일 10:00 ~ 18:00</Time>
                <Rest>점심시간 12:30 ~ 13:30 / 토·일·공휴일 휴무</Rest>
            </DescSection>
            <BackgroundDiv></BackgroundDiv>
            <FrequentQaSection>
                <FrequentQa>자주 묻는 질문</FrequentQa>
                <ButtonDiv>
                    {qaTypes?.map((type) => (
                        <FrequentButton
                            key={type.id}
                            onClick={qaIdHandler}
                            id={type.id.toString()}
                            isClick={type.id === qaId}
                        >
                            {type.name}
                        </FrequentButton>
                    ))}
                </ButtonDiv>
            </FrequentQaSection>
            <BackgroundDiv></BackgroundDiv>
            <QnaList qaId={qaId} />
        </ContactDiv>
    );
};
export default Contact;
