import styled from '@emotion/styled';

const Container: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
    position: absolute;
    display: block;
    width: 100%;
    height: 100vh;
    max-width: 672px;
    left: 0;
    right: 0;
    top: 0;

    margin: 0 auto;
    background-color: #fff;
`;
