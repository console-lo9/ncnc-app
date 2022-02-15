import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import Container from 'layout/Container';
import Header from 'layout/Header';
import ContentsBox from 'layout/ContentsBox';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Container>
            <Header />
            <Global styles={reset} />
            <ContentsBox>
                <Component {...pageProps} />
            </ContentsBox>
        </Container>
    );
};

export default wrapper.withRedux(MyApp);
