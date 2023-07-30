import { config } from '../../../config/config';
import http from '../../http';


const editProduct = (id: number, name: string, tag: string, version: number, price: number, sxcname: string, bbb_id: number, link: string, licensed: boolean, isnew: boolean, autoinstaller: boolean, recurrent: boolean, tab: boolean, tabroute: string, description: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .put(`${config.privateapilink}/admin/products/${id}`, { name, tag, version, price, sxcname, bbb_id, link, licensed, isnew, autoinstaller, recurrent, tab, tabroute, description})
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default editProduct;
