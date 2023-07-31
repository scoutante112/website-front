import { config } from "../../../config/config";
import { httpMultipart } from "../../http";
import { Account } from "../../../components/Account/Manager/Forms/EditAccountForm";


const createTicket = (subject: string, message: string, account: Account, license?: string, attachments?: File[], logs_url?: string): Promise<any> => {

  const formData = new FormData();
  formData.append('subject', subject);
  formData.append('message', message);
  if(license) {
    formData.append('license', license);
  }
  if(logs_url) {
    formData.append('logs_url', logs_url);
  }
  if (attachments && attachments.length > 0) {
    attachments.forEach((file) => {
      formData.append('attachments[]', file, file.name);
    });
  }
  if(account.discord) {
    formData.append('discord_user_id', account.discord.data.id);
  }
  return new Promise((resolve, reject) => {
    httpMultipart
      .post(`${config.privateapilink}/tickets`, formData)
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default createTicket;