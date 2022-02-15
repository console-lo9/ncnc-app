import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import iconMenu from '/assets/menu.png';
import Image from 'next/image';
import back from '/assets/Back.png';
import { useDispatch } from 'react-redux';
import { mypageActions } from 'store';
import Mypage from 'components/Mypage';

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

const PageDiv = styled.div`
    z-index: 100;
`;

const Header = ({ name }: { name: string }): JSX.Element => {
    const dispatch = useDispatch();
    const openHandler = () => {
        dispatch(mypageActions.mypage(true));
    };
    return (
        <Fragment>
            <Wrapper>
                {name ? (
                    <>
                        <IconWrap>
                            <Image src={back} alt="menu" />
                        </IconWrap>
                        <Text>
                            <p>{name}</p>
                        </Text>
                    </>
                ) : (
                    <>
                        <IconWrap onClick={openHandler}>
                            <Image src={iconMenu} alt="menu" />
                        </IconWrap>
                        <Text>
                            <p>니콘 내콘</p>
                        </Text>
                    </>
                )}
            </Wrapper>
        </Fragment>
    );
};

const HeaderBox = styled.header``;

export default Header;
