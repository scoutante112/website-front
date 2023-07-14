import { config } from '../../config/config';
import http from '../http';

const getOrderInvoice = (order: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .get(`${config.privateapilink}/orders/invoice`, { params: { order } })
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default getOrderInvoice;