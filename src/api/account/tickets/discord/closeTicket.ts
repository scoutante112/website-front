import { config } from '../../../../config/config';
import http from '../../../http';

const closeTicket = (id: string): Promise<any> => {

    return new Promise((resolve, reject) => {
        http
            .delete(`${config.privateapilink}/tickets/discordTicket/${id}`)
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default closeTicket;