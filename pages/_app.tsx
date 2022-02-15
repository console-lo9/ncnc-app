import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { Fragment } from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Global styles={reset} />
            <Component {...pageProps} />
        </Fragment>
    );
};

export default wrapper.withRedux(MyApp);
