import { config } from '../../config/config';
import http from '../http';

const createOrder = (products: number[], extension?: boolean): Promise<any> => {
  const isExtension = extension ? 1 : 0
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/orders`, { products, extension: isExtension })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export default createOrder;