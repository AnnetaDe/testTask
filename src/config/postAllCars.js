import { mockApi } from './mockApi';
import cars from './cars';

export const postJSON = async () => {
  try {
    const response = await mockApi.post('advert', cars);
    console.log('Cars are posted', response.data);
  } catch (error) {
    console.log('Error', error.message);
  }
};
