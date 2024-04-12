import { config } from '../../../../config/config';
import http from '../../../http';

const getAttachment = (id: number, uuid: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        http
            .get(`${config.privateapilink}/tickets/discordTicket/${id}/attachment/${uuid}`, {
                responseType: 'blob'
            })
            .then((response) => {
                resolve(response);
            })
            .catch(reject);
    });
};

export default getAttachment;