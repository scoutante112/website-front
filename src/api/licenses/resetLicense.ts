import { config } from '../../config/config';
import http from '../http';


const resetLicense = (id: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .post(`${config.privateapilink}/license/reset/${id}`)
            .then((data) => resolve(data))
            .catch((data) => reject(data));
    });
};

export default resetLicense;