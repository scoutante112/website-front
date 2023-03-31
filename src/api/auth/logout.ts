import { config } from '../../config/config';
import http from '../http';



const logoutUser = (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .post(`${config.privateapilink}/auth/logout`)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default logoutUser;