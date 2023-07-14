import { config } from '../../config/config';
import http from '../http';

const createOrder = (product: string, promocode?: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/orders`, { product, promocode })
      .then((data) => resolve(data))
      .catch((data) => resolve(data.response.data));
  });
};

export default createOrder;