import { config } from '../../../config/config';
import http from '../../http';

const createAutoInstaller = (
    name: string,
    type: string,
    where: string,
    content: string,
    version: string,
    theme_id?: number,
    product_id?: number
): Promise<any> => {
    return new Promise((resolve) => {
        const body = { name, type, where, content, version, theme_id, product_id };
        http
            .post(`${config.privateapilink}/admin/autoinstaller`, body)
            .then((data) => resolve(data))
            .catch((data) => resolve(data.response));
    });
};
export default createAutoInstaller;