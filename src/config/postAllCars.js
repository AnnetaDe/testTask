import { mockApi } from './mockApi';
import cars from './cars';
console.log('cars', cars);

export const postJSON = async cars => {
  for (let i = 0; i < cars.length; i++) {
    try {
      const response = await mockApi.post('advert', cars[i]);
      console.log('Car is posted', response.data);
    } catch (error) {
      console.log('Error', error.message);
    }
  }
};
// postJSON(cars);
