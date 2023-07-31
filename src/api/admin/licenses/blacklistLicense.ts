import { config } from '../../../config/config';
import http from '../../http';


const blacklistLicense = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/admin/licenses/blacklist/${id}`)
      .then((data) => resolve(data))
      .catch((data) => reject(data));
  });
};

export default blacklistLicense;