import type { NextPage } from 'next';
import Head from 'next/head';
import useAxios from 'hooks/useAxios';
import axios from 'axios';

import Deal from 'components/Deal/Deal';
import { DealItemProps } from 'components/Deal/types';

import Carousel from 'components/Carousel/Carousel';

interface HomeProps {
    conItems: DealItemProps[];
}
const Home: NextPage<HomeProps> = ({ conItems }) => {
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
            <Carousel />
            <Deal onDealItems={conItems} />
        </div>
    );
};

export async function getServerSideProps() {
    const fetchUrl = `https://api2.ncnc.app/con-items/soon`;
    const { data } = await axios.get<{ conItems: DealItemProps[] }>(fetchUrl);
    const conItems = data.conItems;
    return {
        props: { conItems },
    };
}
export default Home;
