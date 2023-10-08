import { config } from '../../../config/config';
import http, { httpMultipart } from "../../http";


const editNews = (id: number, title: string, category: number, tags: string[], slug: string, data: string, pictures: File[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    httpMultipart
      .post(`${config.privateapilink}/admin/blogs/${id}`, { title, category, tags, slug, data, pictures })
      .then((data) => resolve(data))
      .catch((data) => resolve(data.response));
  });
};

export default editNews;