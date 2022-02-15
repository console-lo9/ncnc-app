import axios from 'axios';

export const fetcher = async (url: string) => {
    const { data } = await axios
        .get(`https://api2.ncnc.app/${url}`)
        .catch((error) => {
            console.log('Error>>', error);
        });
    return data;
};
