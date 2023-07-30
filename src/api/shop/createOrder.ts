import { config } from '../../config/config';
import http from '../http';

const createOrder = (products: number[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/orders`, { products })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export default createOrder;