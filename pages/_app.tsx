import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import Container from 'layout/Container';
import Header from 'layout/Header';
import ContentsBox from 'layout/ContentsBox';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetcher } from 'utils/fetcher';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    const [headerTitle, setHeaderTitle] = useState('');
    const title = router.asPath;

    const splitRouter = title.split('/');
    const category = splitRouter[1];
    const id = Number(splitRouter[2]);

    console.log('router:', router.asPath);
    let name: string = '';

    useEffect(() => {
        if (id) {
            const getCategories = async () => {
                console.log('category:', category);
                console.log('id:', id);
                if (category === 'categories') {
                    const fetchUrl = `con-category1s/${id}/nested`;
                    const { conCategory1 } = await fetcher(fetchUrl);
                    name = conCategory1.name;
                } else if (category === 'brands') {
                    const fetchUrl = `con-category2s/${id}`;
                    const { conCategory2 } = await fetcher(fetchUrl);
                    name = conCategory2.name;
                } else {
                    name = ' ';
                }
                setHeaderTitle(name);
            };
            getCategories();
        }
    }, [id]);

    return (
        <>
            <Container>
                <Header name={headerTitle} />
                <Global styles={reset} />
                <ContentsBox>
                    <Component {...pageProps} />
                </ContentsBox>
            </Container>
        </>
    );
};

export default wrapper.withRedux(MyApp);
