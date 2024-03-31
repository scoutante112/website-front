import { config } from '../../../config/config';
import http from '../../http';


const createOption = (email: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .get(`${config.apilink}/auth/passkeys/options?email=${email}`)
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default createOption;
