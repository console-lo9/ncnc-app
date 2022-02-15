import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
    const router = useRouter();
    const { id } = router.query;

    return <HeaderBox>Header</HeaderBox>;
};

const HeaderBox = styled.header`
    top: 0px;
    position: fixed;
    background-color: #fff;
    height: 59px;
    display: flex;
`;

export default Header;
