import { create } from 'zustand';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios.lib';

interface EmailStore {
    loading: boolean;
    sendEmail: (data: any) => Promise<void>;
}

export const useEmailStore = create<EmailStore>((set) => ({
    loading: false,

    sendEmail: async (data) => {
        try {
            set({ loading: true });
            const response = await axiosInstance.post('/email', data);
            toast.success(response.data.msg || 'Message sent successfully');
        } catch (error: any) {
            console.log('Error in send email func', error.message);
            toast.error(
                error?.response?.data.msg ||
                    error?.message ||
                    'something went wrong',
            );
        } finally {
            set({ loading: false });
        }
    },
}));
