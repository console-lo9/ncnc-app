import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Container from 'layout/Container';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Container>
                <Global styles={reset} />
                <Component {...pageProps} />
            </Container>
        </>
    );
}

export default MyApp;
