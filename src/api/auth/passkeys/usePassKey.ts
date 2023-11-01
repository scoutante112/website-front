import { config } from '../../../config/config';
import http from '../../http';


const usePasskey = (data: PublicKeyCredential, email: string): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        http
            .post(`${config.apilink}/auth/passkeys/use`, { data, email })
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default usePasskey;
