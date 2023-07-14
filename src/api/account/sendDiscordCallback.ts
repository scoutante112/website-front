import { config } from '../../config/config';
import http from '../http';


const checkLogin = (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .get(`${config.apilink}/account/discord/callback`)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default checkLogin;
