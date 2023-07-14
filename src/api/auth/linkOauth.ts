import { config } from '../../config/config';
import http from '../http';


const loginOauth = (type: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .post(`${config.privateapilink}/account/oauth`, {type})
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default loginOauth;