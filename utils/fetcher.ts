import axios from 'axios';

export const fetcher = async (url: string) => {
    try {
        const { data } = await axios.get(`https://api2.ncnc.app/${url}`);
        return data;
    } catch (err) {
        console.log(err);
    }
};
