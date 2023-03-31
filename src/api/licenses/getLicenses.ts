import { config } from '../../config/config';
import http from '../http';


const createLicense = (email: string, boughtlocation: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/license`, { userid: email, type: boughtlocation })
      .then(() => resolve())
      .catch(reject);
  });
};

export default createLicense;