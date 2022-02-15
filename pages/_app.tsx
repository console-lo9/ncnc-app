import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
<<<<<<< HEAD
import { Fragment } from 'react';
=======
>>>>>>> 9fff0eda417fbe1e8def62e86373a7da97d77045
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
