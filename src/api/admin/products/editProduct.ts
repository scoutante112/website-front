import { config } from '../../../config/config';
import { httpMultipart } from '../../http';
import { Description } from '../../../components/Admin/Products/EditProductButton';


const editProduct = (id: number, name: string, slug: string, version: number, price: number, sxcname: string, bbb_id: number, link: string, licenseda: boolean, isnewa: boolean, autoinstallera: boolean, recurrenta: boolean, taba: boolean, tabroute: string, hidea: boolean, extension: boolean, category: string, isWings: boolean, descriptions: Description[], extension_product?: number | null, logo?: File | null, zip?: File | null): Promise<any> => {
    const licensedString = licenseda ? 1 : 0;
    const isNewString = isnewa ? 1 : 0;
    const extensionString = extension ? 1 : 0;
    const autoinstallerString = autoinstallera ? 1 : 0;
    const recurrentString = recurrenta ? 1 : 0;
    const isWingsString = isWings ? 1 : 0;
    const tabString = taba ? 1 : 0;
    const hideString = hidea ? 1 : 0;
    return new Promise<any>((resolve, reject) => {
        httpMultipart
            .post(`${config.privateapilink}/admin/products/${id}`, { name, version, price, sxcname, bbb_id, link, licensed: licensedString, isnew: isNewString, autoinstaller: autoinstallerString, recurrent: recurrentString, tab: tabString, tabroute, descriptions, hide: hideString, slug: slug, category: category, isWings: isWingsString, logo, zip, extension: extensionString, extension_product})
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default editProduct;
