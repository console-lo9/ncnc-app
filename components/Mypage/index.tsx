import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import closeButton from 'assets/closeButton.svg';
import enter from 'assets/enter.svg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { mypageActions, RootState } from 'store';

const slideLeft = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-600px);
  }
`;
const slideRight = keyframes`
  from {
    transform: translateX(-600px);
  }
  to {
    transform: translateX(0px);
  }
`;
const MypageDiv = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;

    display: block;
    ${({ isOpen }) => {
        if (!isOpen) {
            return css`
                animation-name: ${slideLeft};
                display: none;
            `;
        }
    }}
    z-index: 100;
    overflow: hidden;

    animation-duration: 250ms;
    animation-timing-function: ease-out;
    animation-name: ${slideRight};
    animation-fill-mode: forwards;
`;
const Nav = styled.nav`
    background-color: rgb(255, 255, 255);
    height: 58px;
    top: 0px;
`;
const NavDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 17px;
`;
const TitleSpan = styled.span`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
`;
const EmptyDiv = styled.div`
    background-color: rgb(235, 236, 237);
    height: 10px;
`;
const EnterDiv = styled.div`
    display: flex;
    padding: 15px 17px;
    background-color: #fff;
    justify-content: space-between;
`;
const TextSpan = styled.div`
    font-size: 15px;
`;
const Mypage = () => {
    const dispatch = useDispatch();
    const mypage = useSelector((state: RootState) => state.mypage);
    console.log(mypage);
    const closeHandler = () => {
        dispatch(mypageActions.mypage(false));
    };
    return (
        <MypageDiv isOpen={mypage.mypage}>
            <Nav>
                <NavDiv>
                    <button onClick={closeHandler}>
                        <Image src={closeButton} />
                    </button>
                    <TitleSpan>마이페이지</TitleSpan>
                </NavDiv>
            </Nav>
            <div>
                <section>
                    <EmptyDiv />
                    <Link href={'/contacts'}>
                        <a onClick={closeHandler}>
                            <EnterDiv>
                                <TextSpan>고객센터</TextSpan>
                                <Image src={enter} />
                            </EnterDiv>
                        </a>
                    </Link>
                    <EmptyDiv />
                </section>
            </div>
        </MypageDiv>
    );
};

export default Mypage;
