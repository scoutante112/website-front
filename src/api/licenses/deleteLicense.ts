import { config } from '../../config/config';
import http from '../http';


const deleteLicense = (licenseId: string, ip: any): Promise<void> => {
    return new Promise((resolve, reject) => {
        http
            .delete(`${config.privateapilink}/license/${licenseId}`, { params: { ip } })
            .then(() => resolve())
            .catch(reject);
    });
};

export default deleteLicense;