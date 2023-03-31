import { config } from '../../config/config';
import http from '../http';


const getDownloadLink = (order: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .get(`${config.privateapilink}/orders/downloadlink/${order}`)
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default getDownloadLink;