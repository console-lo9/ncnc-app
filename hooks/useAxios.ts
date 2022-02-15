import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api2.ncnc.app';

const useAxios = <T>(url: string) => {
    const [datas, setDatas] = useState<T>();

    useEffect(() => {
        const fetchData = async (url: string) => {
            const { data } = await axios.get(url);
            setDatas(data);
        };
        fetchData(url);
    }, []);
    return datas;
};

export default useAxios;
