import { config } from '../../../config/config';
import http from '../../http';

const createCategory = (name: string, slug: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/admin/categories`, { name, slug })
      .then((data) => resolve(data))
      .catch((data) => resolve(data.response));
  });
};

export default createCategory;