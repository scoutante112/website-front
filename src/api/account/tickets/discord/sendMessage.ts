import { config } from '../../../../config/config';
import http from '../../../http';

const addMessage = (id: string, message: string): Promise<any> => {

    return new Promise((resolve, reject) => {
        http
            .post(`${config.privateapilink}/tickets/discordTicket/${id}`, {'data': message})
            .then((data) => resolve(data))
            .catch(reject);
    });
};

export default addMessage;