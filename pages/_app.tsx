import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={reset} />
            <Component {...pageProps} />;
        </>
    );
}

export default MyApp;
