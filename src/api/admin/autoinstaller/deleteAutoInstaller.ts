import { config } from '../../../config/config';
import http from '../../http';


const deleteAutoInstaller = (id: number): Promise<any> => {
    return new Promise((resolve) => {
        http
            .delete(`${config.privateapilink}/admin/autoinstaller/${id}`)
            .then((data) => resolve(data))
            .catch((data) => resolve(data.response));
    });
};

export default deleteAutoInstaller;