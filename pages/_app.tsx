import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={reset} />
            <Component {...pageProps} />;
        </>
    );
}

export default wrapper.withRedux(MyApp);
