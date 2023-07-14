import { config } from '../../config/config';
import http from '../http';


const tokenLogin = (token: string ): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .post(`${config.privateapilink}/auth/tokenlogin`, { token })
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default tokenLogin;