import { config } from '../../../config/config';
import http from '../../http';


const getUser = (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .get(`${config.apilink}/admin/users`)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default getUser;
