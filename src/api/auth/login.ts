import { config } from '../../config/config';
import http from '../http';


const loginUser = (email: string ): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .post(`${config.privateapilink}/auth/login`, { email })
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default loginUser;