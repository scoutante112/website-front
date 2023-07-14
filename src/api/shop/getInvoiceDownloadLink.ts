import { config } from '../../config/config';
import http from '../http';


const getInvoiceDownloadLink = (order: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .get(`${config.privateapilink}/orders/downloadInvoiceLink/${order}`)
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default getInvoiceDownloadLink;