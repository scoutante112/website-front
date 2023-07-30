import { config } from '../../config/config';
import http from '../http';


const getDownloadOneLink = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .get(`${config.privateapilink}/orders/downloadOnelink/${id}`)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default getDownloadOneLink;