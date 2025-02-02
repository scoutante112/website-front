import { config } from '../../../config/config';
import http from '../../http';


const addPasskey = (token: any): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .post(`${config.apilink}/auth/passkeys/add`, { token })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default addPasskey;
