import { config } from "../../../config/config";
import http from "../../http";
import { Account } from "../../../components/Account/Manager/Forms/EditAccountForm";


const addMessage = (id: number, message: string, account: Account, attachments?: File[]): Promise<any> => {
  const formData = new FormData();
  formData.append('message', message);
  if (attachments) {
    attachments.forEach((file) => {
      formData.append('attachments[]', file);
    });
  }
  if(account.discord) {
    formData.append('discord_user_id', account.discord.data.id);
  }
  return new Promise((resolve, reject) => {
    http
      .post(`${config.privateapilink}/tickets/${id}/messages`, formData)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default addMessage;