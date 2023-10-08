import { config } from '../../../config/config';
import { httpMultipart } from "../../http";


const editProduct = (id: number, name: string, tag: string, version: number, price: number, sxcname: string, bbb_id: number, link: string, licenseda: boolean, isnewa: boolean, autoinstallera: boolean, recurrenta: boolean, taba: boolean, tabroute: string, description: string, hidea: boolean, extension: boolean, extension_product?: number | null, logo?: File | null, zip?: File | null): Promise<any> => {
  const licensedString = licenseda ? 1 : 0;
  const isNewString = isnewa ? 1 : 0;
  const extensionString = extension ? 1 : 0;
  const autoinstallerString = autoinstallera ? 1 : 0;
  const recurrentString = recurrenta ? 1 : 0;
  const tabString = taba ? 1 : 0;
  const hideString = hidea ? 1 : 0;
  return new Promise<any>((resolve, reject) => {
    httpMultipart
      .post(`${config.privateapilink}/admin/products/${id}`, { name, tag, version, price, sxcname, bbb_id, link, licensed: licensedString, isnew: isNewString, autoinstaller: autoinstallerString, recurrent: recurrentString, tab: tabString, tabroute, description, hide: hideString, logo, zip, extension: extensionString, extension_product})
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default editProduct;
