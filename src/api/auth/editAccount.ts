import { config } from '../../config/config';
import http from '../http';


const editAccount = (email: string ): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .post(`${config.privateapilink}/account/edit`, { email })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default editAccount;