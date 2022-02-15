import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { mypageActions } from 'store';
import iconMenu from '/public/menu.png';

import back from '/public/Back.svg';
import Image from 'next/image';
import styled from '@emotion/styled';

const Wrapper = styled.nav`
    width: 100%;
    max-width: 672px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
    top: 0px;
    position: fixed;
    height: 59px;
    z-index: 50;
    &.detail {
        border-bottom: 1px solid rgb(221, 221, 221);
    }
    p {
        font-weight: 600;
        font-size: 15px;
        margin-right: 30px;
    }
`;

const IconWrap = styled.button`
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-left: 6px;
`;

const Text = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Header = ({ name }: { name: string }): JSX.Element => {
    const router = useRouter();
    const dispatch = useDispatch();
    const openHandler = () => {
        dispatch(mypageActions.mypage(true));
    };
    return (
        <Wrapper className={name === ' ' ? 'detail' : ''}>
            {name && router.asPath !== '/' && (
                <>
                    <IconWrap>
                        <button onClick={() => router.back()}>
                            <Image src={back} alt="menu" />
                        </button>
                    </IconWrap>
                    <Text>
                        <p>{name}</p>
                    </Text>
                </>
            )}
            {router.asPath === '/' && (
                <>
                    <IconWrap onClick={openHandler}>
                        <Image src={iconMenu} alt="menu" />
                    </IconWrap>
                    <Text>
                        <p>니콘내콘</p>
                    </Text>
                </>
            )}
        </Wrapper>
    );
};

const HeaderBox = styled.header``;

export default Header;
