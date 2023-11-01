import { config } from '../config/config';
import http from './http';


const setndContact = (firstname: string, lastname: string, email: string, message: string, society?: string, phone?: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .post(`${config.privateapilink}/sendContact`, { firstname, lastname, email, phone, message, society })
            .then((data) => resolve(data))
            .catch((data) => reject(data));
    });
};

export default setndContact;