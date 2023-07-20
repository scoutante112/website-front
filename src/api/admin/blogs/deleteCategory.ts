import { config } from '../../../config/config';
import http from '../../http';


const deleteCategory = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .delete(`${config.privateapilink}/admin/categories/${id}`)
      .then((data) => resolve(data))
      .catch((data) => resolve(data.response));
  });
};

export default deleteCategory;