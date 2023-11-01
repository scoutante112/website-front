import { config } from '../../../config/config';
import http from '../../http';


const addPasskey = (data: Credential, email: string, options: any): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .post(`${config.apilink}/auth/passkeys/add`, { data, email, options })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default addPasskey;
