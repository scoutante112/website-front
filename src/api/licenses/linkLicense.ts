import { config } from '../../config/config';
import http from '../http';


const linkLicense = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/license/link/${id}`)
      .then((data) => resolve(data))
      .catch((data) => reject(data));
  });
};

export default linkLicense;