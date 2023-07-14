import { config } from '../../config/config';
import http from '../http';


const deleteOauth = (type: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .delete(`${config.privateapilink}/account/oauth`, {data: {type}})
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default deleteOauth;