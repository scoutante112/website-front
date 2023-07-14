import { config } from '../../config/config';
import http from '../http';



const editAccountInfos = (society: string, address: string, city: string, region: string, postalcode: string, country: string, firstname: string, lastname: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .post(`${config.privateapilink}/account/editinfos`, { society, address, city, region, postalcode, country, firstname, lastname })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default editAccountInfos;