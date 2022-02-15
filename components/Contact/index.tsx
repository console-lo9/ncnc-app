import { useEffect, useState } from 'react';
import useAxios from 'hooks/useAxios';

import { QaType, QnaType } from 'types/qaTypes';
import QnaList from './QnaList';

import * as Styled from './styled';

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
        <Styled.ContactDiv>
            <Styled.DescSection>
                <Styled.Title>상담 시간 안내</Styled.Title>
                <Styled.Time>평일 10:00 ~ 18:00</Styled.Time>
                <Styled.Rest>
                    점심시간 12:30 ~ 13:30 / 토·일·공휴일 휴무
                </Styled.Rest>
            </Styled.DescSection>
            <Styled.BackgroundDiv></Styled.BackgroundDiv>
            <Styled.FrequentQaSection>
                <Styled.FrequentQa>자주 묻는 질문</Styled.FrequentQa>
                <Styled.ButtonDiv>
                    {qaTypes?.map((type) => (
                        <Styled.FrequentButton
                            key={type.id}
                            onClick={qaIdHandler}
                            id={type.id.toString()}
                            isClick={type.id === qaId}
                        >
                            {type.name}
                        </Styled.FrequentButton>
                    ))}
                </Styled.ButtonDiv>
            </Styled.FrequentQaSection>
            <Styled.BackgroundDiv></Styled.BackgroundDiv>
            <QnaList qaId={qaId} />
        </Styled.ContactDiv>
    );
};
export default Contact;
