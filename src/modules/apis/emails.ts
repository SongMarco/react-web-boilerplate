import Cookies from 'universal-cookie';
import axios from '../../utils/axios';

const cookies = new Cookies();

export interface EmailRow {
  index: number;
  email: string;
}

export interface Email {
  id: number;
  isScheduled: boolean;
  sendAt: Date;
  sendDayOfWeek: number;
}

export const EmailAPI = {
  fetchEmails: async (): Promise<EmailRow[]> => {
    const { data: getRes } = await axios.get('/emails');
    // console.log('-> getRes', getRes);

    return getRes as EmailRow[];
  },

  sendEmails: async (emailList: EmailRow[]): Promise<any> => {
    const { data } = await axios.post('/emails/send', emailList);
    // console.log('-> getRes', getRes);

    return data;
  },
  findScheduledEmail: async (): Promise<Email> => {
    const { data: getRes } = await axios.get(`/emails/${'1'}`);
    return getRes as Email;
  },

  saveScheduledEmail: async ({
    sendAt,
    isScheduled,
    sendDayOfWeek,
  }: Partial<Email>): Promise<any> => {
    const { data } = await axios.post('/emails/schedules', {
      id: 1,
      sendAt,
      isScheduled,
      sendDayOfWeek,
    });
    // console.log('-> getRes', getRes);

    return data;
  },
};

export default EmailAPI;