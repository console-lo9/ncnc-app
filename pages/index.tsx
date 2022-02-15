import type { NextPage } from 'next';
import Head from 'next/head';
import useAxios from 'hooks/useAxios';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Deal from 'components/Deal/Deal';
import { DealItemProps } from 'components/Deal/types';

const Home: NextPage = () => {
    const [dealItems, setDealItems] = useState<DealItemProps[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            const fetchUrl = `https://api2.ncnc.app/con-items/soon`;
            const { data } = await axios.get<{ conItems: DealItemProps[] }>(
                fetchUrl,
            );
            const conItems = data.conItems;

            setDealItems(conItems);
        };

        getCategories();
    }, []);

    useAxios('/con-category1s');
    useAxios('/con-items/soon');
    return (
        <div>
            <Head>
                <title>NCNC App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Deal onDealItems={dealItems} />
        </div>
    );
};

export default Home;
