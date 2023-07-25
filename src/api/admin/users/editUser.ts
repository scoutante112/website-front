import { config } from '../../../config/config';
import http from '../../http';


const editUser = (id: number, name: string, email: string, society: string | null, address: string | null, city: string | null, country: string | null, region: string | null, postal_code: string | null, phone_number: string | null, firstname: string, lastname: string, role: number): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    http
      .post(`${config.apilink}/admin/users/${id}`, { name, email, society, address, city, country, region, postal_code, phone_number, firstname, lastname, role})
      .then((data) => resolve(data))
      .catch(reject);
  });
};

export default editUser;
