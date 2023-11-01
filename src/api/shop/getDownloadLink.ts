import { config } from '../../config/config';
import http from '../http';


const getDownloadLink = (order: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .get(`${config.privateapilink}/orders/downloadlink/${order}`)
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default getDownloadLink;