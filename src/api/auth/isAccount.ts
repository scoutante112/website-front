import { config } from '../../config/config';
import http from '../http';


const isAccount = (email: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .get(`${config.apilink}/auth/isAccount?email=${email}`)
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default isAccount;
