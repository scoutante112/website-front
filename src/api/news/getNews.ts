import { config } from '../../config/config';
import http from '../http';

const getNews = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .get(`${config.privateapilink}/blogs/${id}`)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default getNews;