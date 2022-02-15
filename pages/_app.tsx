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
import axios from 'axios';
import { conCategory1, conCategory2s } from 'types/categoryTypes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    const [headerTitle, setHeaderTitle] = useState('');
    const title = router.asPath;

    const splitRouter = title.split('/');
    const category = splitRouter[1];
    const id = Number(splitRouter[2]);

    console.log('router:', router.asPath);
    const [categories, setCategories] = useState<conCategory1 | null>(null);
    let name = '';

    useEffect(() => {
        if (id) {
            const getCategories = async () => {
                console.log('category:', category);
                console.log('id:', id);
                const fetchUrl = `con-category1s/${id}/nested`;
                const { conCategory1 } = await fetcher(fetchUrl);
                if (category === 'categories') {
                    name = conCategory1.name;
                } else if (category === 'brands') {
                    name = conCategory1.conCategory2s.find(
                        (brand: conCategory2s) => Number(brand.id) === id,
                    ).name;
                }
                console.log('conCategory1:', conCategory1);
                console.log('conCategory2:', conCategory1.conCategory2s);
                console.log('name:', name);

                setCategories(conCategory1);
                setHeaderTitle(name);
            };
            getCategories();
            // setTitle(name);
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
