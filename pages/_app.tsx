import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { Fragment } from 'react';
import Container from 'layout/Container';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Container>
            <Global styles={reset} />
            <Component {...pageProps} />
        </Container>
    );
};

export default wrapper.withRedux(MyApp);
