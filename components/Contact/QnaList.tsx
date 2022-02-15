import { useState } from 'react';
import useAxios from 'hooks/useAxios';
import { Qas } from 'types/qaTypes';
import Qna from './Qna';

const QnaList = ({ qaId }: { qaId: number }) => {
    const qaBuyList = useAxios<Qas>(`qas?qaTypeId=1`);
    const qaSellList = useAxios<Qas>(`qas?qaTypeId=2`);
    const [currentQa, setCurrentQa] = useState<number>(0);
    if (!qaBuyList || !qaSellList) return <div>로딩중</div>;
    return (
        <section>
            <div>
                {qaId === 1
                    ? qaBuyList.qas.map((qa) => (
                          <Qna
                              key={qa.id}
                              qa={qa}
                              currentQa={currentQa}
                              setCurrentQa={setCurrentQa}
                          />
                      ))
                    : qaSellList.qas.map((qa) => (
                          <Qna
                              key={qa.id}
                              qa={qa}
                              currentQa={currentQa}
                              setCurrentQa={setCurrentQa}
                          />
                      ))}
            </div>
        </section>
    );
};

export default QnaList;
