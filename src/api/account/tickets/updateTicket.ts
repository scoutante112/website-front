import { config } from "../../../config/config";
import http from "../../http";


const createTicket = (ticket:string, status: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/tickets/${ticket}/status`, { status })
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default createTicket;