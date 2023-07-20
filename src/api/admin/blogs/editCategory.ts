import { config } from '../../../config/config';
import http from '../../http';


const editCategory = (id: number, name: string, slug: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .put(`${config.privateapilink}/admin/categories/${id}`, { name, slug })
      .then((data) => resolve(data))
      .catch((data) => resolve(data.response));
  });
};

export default editCategory;