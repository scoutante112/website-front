import { config } from '../../config/config';
import http from '../http';


const editAccount = (data: string, type: string ): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .post(`${config.privateapilink}/account/edit`, { data, type })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default editAccount;