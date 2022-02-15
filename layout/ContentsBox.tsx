import styled from '@emotion/styled';
import React from 'react';

const ContentsBox: React.FC = ({ children }) => {
    return <ContentsWrapper>{children}</ContentsWrapper>;
};

const ContentsWrapper = styled.main`
    margin-top: 59px;
    background-color: rgb(238, 238, 238);
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export default ContentsBox;
