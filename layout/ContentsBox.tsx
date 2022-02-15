import styled from '@emotion/styled';

const ContentsBox: React.FC = ({ children }) => {
    return <ContentsWrapper>{children}</ContentsWrapper>;
};

const ContentsWrapper = styled.main`
    background-color: rgb(238, 238, 238);
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default ContentsBox;
