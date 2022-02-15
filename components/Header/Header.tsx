import React from 'react';
import styled from '@emotion/styled';
import iconMenu from '/assets/icon-menu.png';
import Image from 'next/image';
import back from '/assets/Back.png';

const Wrapper = styled.nav`
    width: 375px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
    p {
        font-weight: 600;
        font-size: 15px;
        margin-left: 7.5rem;
    }
`;

const IconWrap = styled.button`
    width: 30px;
    height: 30px;
    padding: 7px;
    margin-left: 6px;
`;

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <Wrapper>
            {title ? (
                <>
                    <IconWrap>
                        <Image src={back} alt="menu" />
                    </IconWrap>
                    <p>{title}</p>
                </>
            ) : (
                <>
                    <IconWrap>
                        <Image src={iconMenu} alt="menu" />
                    </IconWrap>
                    <p>니콘 내콘</p>
                </>
            )}
        </Wrapper>
    );
};

export default Header;
