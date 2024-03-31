import { config } from '../../config/config';
import http from '../http';



const editAccountInfosNews = (newsletter: boolean): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .post(`${config.privateapilink}/account/editNewsInfos`, { newsletter })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default editAccountInfosNews;