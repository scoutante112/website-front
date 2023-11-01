import { config } from '../../../config/config';
import http from '../../http';


const addPasskey = (data: Credential): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .post(`${config.apilink}/auth/passkeys/create`, { data })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default addPasskey;
