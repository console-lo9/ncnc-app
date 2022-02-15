import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RootState, wrapper } from 'store';
import Container from 'layout/Container';
import Header from 'layout/Header';
import ContentsBox from 'layout/ContentsBox';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetcher } from 'utils/fetcher';
import { useSelector } from 'react-redux';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    const [headerTitle, setHeaderTitle] = useState('');
    const title = router.asPath;
    console.log(router);

    const splitRouter = title.split('/');
    const category = splitRouter[1];
    const id = Number(splitRouter[2]);

    let name: string = '';

    console.log(title);
    useEffect(() => {
        if (id) {
            const getCategories = async () => {
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
        } else {
            if (title === '/contacts') {
                name = '고객센터';
                setHeaderTitle(name);
            }
        }
    }, [id, router, headerTitle, name]);

    return (
        <Container>
            <Header name={headerTitle} />
            <Global styles={reset} />
            <ContentsBox>
                <Component {...pageProps} />
            </ContentsBox>
        </Container>
    );
};

export default wrapper.withRedux(MyApp);
