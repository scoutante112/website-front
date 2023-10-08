import { config } from '../../../config/config';
import http, { httpMultipart } from "../../http";

const createNews = (title: string, category: number, tags: string[], slug: string, data: string, pictures?: File[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    httpMultipart
      .post(`${config.privateapilink}/admin/blogs`, { title, category, tags, slug, data, pictures })
      .then((data) => resolve(data.data))
      .catch((data) => resolve(data.response));
  });
};

export default createNews;