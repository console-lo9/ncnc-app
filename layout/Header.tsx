import React from 'react';
import styled from '@emotion/styled';
import iconMenu from '/assets/menu.png';
import Image from 'next/image';
import back from '/assets/Back.png';
import { useRouter } from 'next/router';

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

const Header = ({ name }: { name: string }): JSX.Element => {
    const router = useRouter();
    return (
        <Wrapper>
            {name ? (
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
            ) : (
                <>
                    <IconWrap>
                        <Image src={iconMenu} alt="menu" />
                    </IconWrap>
                    <Text>
                        <p>니콘 내콘</p>
                    </Text>
                </>
            )}
        </Wrapper>
    );
};

const HeaderBox = styled.header``;

export default Header;
