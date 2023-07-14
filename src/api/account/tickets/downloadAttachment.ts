import { config } from "../../../config/config";
import http from "../../http";


const downloadAttachment = (attachment: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .get(`${config.apilink}/tickets/${attachment}/download`)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default downloadAttachment;
