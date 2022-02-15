import { useDispatch, useSelector } from 'react-redux';
import { mypageActions, RootState } from 'store';
import Image from 'next/image';
import Link from 'next/link';

import closeButton from 'public/closeButton.svg';
import enter from 'public/enter.svg';

import * as Styled from './styled';

const Mypage = () => {
    const dispatch = useDispatch();
    const mypage = useSelector((state: RootState) => state.mypage);

    const closeHandler = () => {
        dispatch(mypageActions.mypage(false));
    };
    return (
        <Styled.MypageDiv isOpen={mypage.mypage}>
            <Styled.Nav>
                <Styled.NavDiv>
                    <button onClick={closeHandler}>
                        <Image src={closeButton} />
                    </button>
                    <Styled.TitleSpan>마이페이지</Styled.TitleSpan>
                </Styled.NavDiv>
            </Styled.Nav>
            <div>
                <section>
                    <Styled.EmptyDiv />
                    <Link href={'/contacts'}>
                        <a onClick={closeHandler}>
                            <Styled.EnterDiv>
                                <Styled.TextSpan>고객센터</Styled.TextSpan>
                                <Image src={enter} />
                            </Styled.EnterDiv>
                        </a>
                    </Link>
                    <Styled.EmptyDiv />
                </section>
            </div>
        </Styled.MypageDiv>
    );
};

export default Mypage;
